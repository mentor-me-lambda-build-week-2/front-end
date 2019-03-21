import React, { Component,  } from 'react';
import axios from 'axios';
import Question from './Question';



import styled from 'styled-components';


const QuestionDiv = styled.div`
  display: flex;
  justify-content: center; 
  align-content: center;
  flex-direction: column;
`
const QDiv = styled.div`
display: flex;
justify-content: center; 
align-content: center;
flex-direction: column;
cursor: pointer;
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
