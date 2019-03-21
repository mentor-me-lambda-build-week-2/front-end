import React, { Component } from 'react';
import { connect } from 'react-redux';
import { askQuest } from '../../actions';


class QuestionForm extends Component {
    state ={

    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAskQuestion = _ => {
        const { name, age, email } = this.state;
        this.props.createFriend({ name, age, email });
        this.setState({ name: '', age: '', email: '' });
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
                value={this.state.question}
                name="question"
                type="text"
                placeholder="Question"
                onChange={this.handleInputChange}
                />
                <input
                className="input"
                value={this.state.email}
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
                />
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


export default connect(mapStateToProps, {askQuest})(QuestionForm);