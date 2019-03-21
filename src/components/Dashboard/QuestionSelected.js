import React, { Component } from 'react';
import axios from 'axios';


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
        <div>
            <h1>{this.props.selectedQuestion.title}</h1>
            {this.state.answers.map(answer => <p>{answer.body}</p> )}
        </div>
        )
    }
}
