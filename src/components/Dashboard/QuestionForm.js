import React, { Component } from 'react';
import { connect } from 'react-redux';
import { askQuest } from '../../actions';
import {withRouter} from 'react-router-dom';

import axios from 'axios';


class QuestionForm extends Component {
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

    handleAskQuestion = _ => {
        // e.preventDefault();
        
        const QObj = {
            u_id : this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        console.log(" QForm State: ", QObj)
        const token = localStorage.getItem('token');
        
        axios.defaults.withCredentials = true;
        const requestOptions = {
        headers: { Authorization: token },
        };
        axios
            .post("https://mentorme-backend.now.sh/api/questions/", QObj,  requestOptions)
		    .then(res => {
                console.log(res)
                const token = localStorage.getItem('token');
                const requestOptions = {
                headers: { Authorization: token },
                };
                axios
                .get('https://mentorme-backend.now.sh/api/questions/', requestOptions)
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
        <div>
            <h3>QuestionForm</h3>
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
                <button onClick={() => this.handleAskQuestion()} type="button">
                Ask Question
                </button>
            </form>
        </div>
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
    connect(mapStateToProps, {askQuest})(QuestionForm)
)