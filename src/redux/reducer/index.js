import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import mitraReducer from './mitraReducer';
import canvaserReducer from './canvaserReducer';

const reducer = combineReducers({loginReducer, mitraReducer, canvaserReducer});

export default reducer;
