import * as actionTypes from '../actions';

const initialState = {
  friends: [],
  gettingQuests: false,
  updatingQuest: false,
  creatingQuest: false,
  deletingQuest: false,
  error: null
};

export const questReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_QUESTS:
      return { ...state, gettingQuests: true };
    case actionTypes.GET_QUESTS:
      return { ...state, friends: action.payload, gettingQuests: false };
    case actionTypes.UPDATING_QUEST:
      return { ...state, updatingQuest: true };
    case actionTypes.UPDATE_QUEST:
      return { ...state, friends: action.payload, updatingQuest: false };
    case actionTypes.DELETING_QUEST:
      return { ...state, deletingQuest: true };
    case actionTypes.DELETE_QUEST:
      return { ...state, friends: action.payload, deletingQuest: false };
    case actionTypes.CREATING_QUEST:
      return { ...state, creatingQuest: true };
    case actionTypes.CREATE_QUEST:
      return { ...state, friends: action.payload, creatingQuest: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingQuests: false,
        creatingQuest: false,
        deletingQuest: false,
        updatingQuest: false,
        error: action.payload
      };
    default:
      return state;
  }
};