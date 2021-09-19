import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import mitraReducer from './mitraReducer';

const reducer = combineReducers({loginReducer, mitraReducer});

export default reducer;
