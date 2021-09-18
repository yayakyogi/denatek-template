import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import canvaserReducer from './canvaserReducer';

const reducer = combineReducers({loginReducer, canvaserReducer});

export default reducer;
