import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0  
};

/*export default function count(state, action) {
    if(typeof state === 'undefined') {
        return initialState;
    }*/
export default function count(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return { ...state, number: state.number + 1 };
        case types.DECREMENT:
            return { ...state, number: state.number - 1 };
        default:
            return state;
    }
}