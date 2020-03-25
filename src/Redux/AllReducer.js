import {combineReducers} from 'redux';
import ListReducer from './ListReducer';

const AllReducers = combineReducers ({
    list:ListReducer,
})
export default AllReducers 