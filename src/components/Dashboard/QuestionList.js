import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

import styled from 'styled-components';


const QuestionDiv = styled.div`
  display: flex;
  justify-content: center; 
  align-content: center;
  flex-direction: column;
`


export default class QuestionList extends Component {

  state= {
    questions: [],
  }

  componentDidMount () {
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


  render() {
    return (
      <QuestionDiv>
        <h3>Question List</h3>
        {this.state.questions.map(question => <Question question={question} key={question.id}/>)}
      </QuestionDiv>
    )
  }
}
