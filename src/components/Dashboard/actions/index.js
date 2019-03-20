import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_QUESTS = 'GET_QUESTS';
export const GETTING_QUESTS = 'GETTING_QUESTS';
export const CREATING_QUEST = 'CREATING_QUEST';
export const CREATE_QUEST = 'CREATE_QUEST';
export const UPDATE_QUEST = 'UPDATE_QUEST';
export const DELETE_QUEST = 'DELETE_QUEST';
export const UPDATING_QUEST = 'UPDATING_QUEST';
export const DELETING_QUEST = 'DELETING_QUEST';
export const SINGLE_QUEST = 'SINGLE_QUEST';
export const TOGGLE_UPDATE_QUEST = 'TOGGLE_UPDATE_QUEST';

const URL = 'https://mentorme-backend.now.sh/api';

export const getQuests = () => {
    const quests = axios.get(`${URL}/get`);
    return dispatch => {
        dispatch({ type: GETTING_QUESTS });
        quests
        .then(response => {
            dispatch({ type: GET_QUESTS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};

export const createQuest = quest => {
    const newQuest = axios.post(`${URL}/create`, quest);
    return dispatch => {
        dispatch({ type: CREATING_QUEST });
        newQuest
        .then(({ data }) => {
            dispatch({ type: CREATE_QUEST, payload: data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};

export const deleteQuest = id => {
    const deletedQuest = axios.delete(`${URL}/delete`, {
        data: { id }
    });
    return dispatch => {
        dispatch({ type: DELETING_QUEST });
        deletedQuest
        .then(({ data }) => {
            dispatch({ type: DELETE_QUEST, payload: data });
            dispatch({ type: SINGLE_QUEST, payload: {} });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};

export const toggleShowUpdate = () => {
    return {
        type: TOGGLE_UPDATE_QUEST
    };
};

export const updateSingleQuest = quest => {
    return {
        type: SINGLE_QUEST,
        payload: quest
    };
};