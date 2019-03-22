import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import AnswerForm from './AnswerForm';

const ContainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    
    padding: 15px;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 15px;

`

const StylesP = styled.p`
    align-self: flex-start;
    
    
`


export default class QuestionSelected extends Component {

    state = {
        question: {},
        answers: [],
    }
    
    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.defaults.withCredentials = true;
        const requestOptions = {
        headers: { Authorization: token },
        };

        axios
		.get("https://mentorme-backend.now.sh/api/answers", {
			headers: { Authorization: localStorage.getItem("token") }
		})
		.then(res => {
            console.log("Answers ", res.data);
            this.setState({
                question: this.props.question,
                answers: res.data
            })
		})
		.catch(err => {
			console.log(err.response);
			if (err.response.status === 403) {
				localStorage.removeItem("token");
            }
		})
    }


    render() {
        return (
        <ContainDiv>
            <AnswerForm />
            <h1>{this.props.selectedQuestion.title}</h1>

            {this.state.answers.map(answer => <StylesP>{answer.body}</StylesP> )}
        </ContainDiv>
        )
    }
}
