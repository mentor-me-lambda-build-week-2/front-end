import React from 'react';

import styled from 'styled-components';

const QuestDiv = styled.div`
    display: flex;
    justify-content: center; 
    align-contend: center; 
`

export default function Question(props){

        return (
        <div>
            <h3>{props.question.title}</h3>
            {/* <
            <div>User: {props.question.username}
                <button onClick = {handleClick}>Answers</button>
            </div> */}
        </div>
    )
}
