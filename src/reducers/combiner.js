import combineReducers from 'redux';
import loginReducer from './loginReducer';
import questReducer from '../components/Dashboard/reducers';

export default combineReducers({
    loginReducer,
    questReducer,
})