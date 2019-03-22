import React, { Component } from 'react';
import { connect } from 'react-redux';
import { askQuest } from '../../actions';
import {withRouter} from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    padding: 15px;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 15px;

    form{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-self: center;
        max-width: 50%;
    }
`


class AnswerForm extends Component {
    state ={
        title: '',
        body: '',
        id: ''
    }

    componentDidMount(){
        const local_id = localStorage.getItem('id');
        this.setState({id: local_id})
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handlePostAnswer = _ => {
        // e.preventDefault();
        
        const AObj = {
            u_id : this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        console.log(" AForm State: ", AObj)
        const token = localStorage.getItem('token');
        
        axios.defaults.withCredentials = true;
        const requestOptions = {
        headers: { Authorization: token },
        };
        axios
            .post("https://mentorme-backend.now.sh/api/answers/", AObj,  requestOptions)
		    .then(res => {
                console.log(res)
                const token = localStorage.getItem('token');
                const requestOptions = {
                headers: { Authorization: token },
                };
                axios
                .get('https://mentorme-backend.now.sh/api/answers/', requestOptions)
                .then(res => {
                    // we're sent an array of users
                    this.props.updateQuest(res.data);
                    this.setState({
                        title: '',
                        body: ''
                    
                    })
                    console.log( 'Res ', res.data);
                })
                .catch(err => console.log(err))
            })
	    	.catch( err =>  console.log(err));
    };



    render() {
        return (
        <FormContainer>
            <h3>Answer Form</h3>
            <form className="">
                <input
                className="input"
                value={this.state.title}
                name="title"
                type="text"
                placeholder="Title"
                onChange={this.handleInputChange}
                />
                <input
                className="input"
                value={this.state.body}
                name="body"
                type="text"
                placeholder="Question"
                onChange={this.handleInputChange}
                />
                {/* <input
                className="input"
                value={this.state.tags}
                name="tags"
                type="text"
                placeholder="Tags"
                onChange={this.handleInputChange}
                /> */}
                <button onClick={() => this.handlePostAnswer()} type="button">
                Answer
                </button>
            </form>
        </FormContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
    //   creatingFriend: state.creatingFriend
    };
};


export default withRouter(
    connect(mapStateToProps, {askQuest})(AnswerForm)
)