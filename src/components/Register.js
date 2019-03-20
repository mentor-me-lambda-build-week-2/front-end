import React, {Component} from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { register } from '../actions';

class Register extends Component {
    state = {
        credentials: {
            firstname: '',
            lastname: '',
            email:'',
            username: '',
            password: '',
            isMentor: false,
        }
    };

    handleChange = e => {
        this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
        });
    };

    register = e => {
        // class property called "register"
        e.preventDefault();
        this.props
        .register(this.state.credentials) // action creator called "register"
        .then(() => this.props.history.push('/dashboard'));
    };

    render() {
        return (
        <div>
            <h3>Register</h3>
            <form onSubmit={this.register}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    value={this.state.credentials.firstname}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    value={this.state.credentials.lastname}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="radio"
                    name="isMentor"
                    value={false}
                    onChange={this.handleChange}
                /> Entreprenuer
                <br/>
                <input
                    type="radio"
                    name="isMentor"
                    value={true}
                    onChange={this.handleChange}
                /> Mentor
                <br/>
                <br />
                <button>
                    {this.props.isLoggingIn ? (
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ) : (
                    'Register'
                    )}
                </button>
            </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);
