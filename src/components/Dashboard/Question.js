import React from 'react';

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
