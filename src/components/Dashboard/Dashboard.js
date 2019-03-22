import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import QuestionSeacrh from './QuestionSeacrh';

import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

import { getQuests } from '../../actions';
import styled from 'styled-components';
import QuestionSelected from './QuestionSelected';

const ContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    
`

class Dashboard extends Component {
    state ={
        questions:[],
        isSelcted: false,
        selectedQuestion: {}
    }

    componentDidMount () {
        // this.props.getQuests();
        const token = localStorage.getItem('token');
        const requestOptions = {
        headers: { Authorization: token },
        };
        axios
        .get('https://mentorme-backend.now.sh/api/questions/', requestOptions)
        .then(res => {
            // we're sent an array of users
            this.setState({ questions: res.data });
            console.log( 'Res ', res.data);
        })
        .catch(err => console.log(err))
    }  

    updateQuest= questR =>{
    
        this.setState({
            questions: questR
        });
    }

    selectQuest = (question) => {
        this.setState({
            selectedQuestion: question,
            isSelcted: true
        })
    }

    render() {
        return (
        <ContainerDiv >
            
            {this.state.isSelcted ? 
                <QuestionSelected 
                    selectedQuestion = {this.state.selectedQuestion} 
                />  : 
                <React.Fragment>
                    <QuestionForm 
                        updateQuest={this.updateQuest} 
                    />
                    <QuestionList 
                        questions = {this.state.questions}
                        selectQuest = {this.selectQuest}
                    />
                </React.Fragment>
            } 
        </ContainerDiv>
        )
    }
}

const mapStateToProps = state => {
    const { reducer } = state;
    return {
    //     quests : reducer.quests,
    //     error : reducer.error,
    //     gettingQuests : reducer.gettingQuests
    }
}

export default connect(mapStateToProps, {getQuests})(Dashboard);