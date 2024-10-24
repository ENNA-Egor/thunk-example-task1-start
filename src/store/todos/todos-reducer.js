import {ADD_TODOS} from './todos-actions';

export const todoReducer = (state= [], action)=> {
    switch(action.type) {
        case ADD_TODOS:
            return action.payload;
        default:
            return state;
    }
}