import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionSeacrh from './QuestionSeacrh';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

import { getQuests } from '../../actions';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center
`


class Dashboard extends Component {
    

    componentDidMount () {
        this.props.getQuests();
    }  

    // toggleSelected (){} //prop

    render() {
        return (
        <ContainerDiv >
            <QuestionForm />
            {this.props.error ? <h3>Error Fetching Friends</h3> : null}
            <QuestionSeacrh />
            {/* {this.props.gettingQuests ? 
                ( <h3>Loading</h3>) : //change to loader
                ( <QuestionList friends={this.props.quests} /> )
            } */}
            <QuestionList />
        </ContainerDiv>
        )
    }
}

const mapStateToProps = state => {
    const { questReducer } = state;
    return {
        // quests : questReducer.quests,
        // error : questReducer.error,
        // gettingQuests : questReducer.gettingQuests
    }
}

export default connect(mapStateToProps, {getQuests})(Dashboard);