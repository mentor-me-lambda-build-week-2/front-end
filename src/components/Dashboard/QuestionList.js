import React, { Component,  } from 'react';
import axios from 'axios';
import Question from './Question';



import styled from 'styled-components';


const QuestionDiv = styled.div`
  display: flex;
  justify-content: center; 
  align-content: center;
  flex-direction: column;
  
  padding: 15px;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 15px;

`
const QDiv = styled.div`
display: flex;
justify-content: center; 
align-content: center;
flex-direction: column;
cursor: pointer;

padding: 15px;
border: 1px solid black;
border-radius: 15px;
margin-bottom: 15px;

`

export default class QuestionList extends Component {

  state= {
    questions: [],
    isSelected: false,
  }

  handleSelect = () => {
    this.setState({
    isSelected: true
    });
};


  


  render() {
    return (
      <QuestionDiv>
        <h3>Question List</h3>
        {this.props.questions.map(question => {
          return(
            <QDiv onClick={() => this.props.selectQuest(question)}>
            <Question question={question} key={question.id} selected={this.handleSelect}/>
          </QDiv>
          )
        })}
        {/* {handleSelect ? <QuestionSelected  question={question.id} /> : null} */}
      </QuestionDiv>
    )
  }
}
