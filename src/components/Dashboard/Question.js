import React, { Component } from "react";

import styled from "styled-components";

const QuestDiv = styled.div`
    display: flex;
    justify-content: center;
    align-contend: center;
    flex-direction: column;

    
`;

export default class Question extends Component {
     

    render() {
        return (
        <QuestDiv onClick={this.props.selected}>
            <h3>{this.props.question.title}</h3>
            <p>{this.props.question.body}</p>
            {/* <
                        <QuestDiv>User: {props.question.username}
                            <button onClick = {handleClick}>Answers</button>
                        </QuestDiv> */}
            {/* <button onClick ={handleSelect}>Show Answers</button> */}
        </QuestDiv>
        );
    }
}
