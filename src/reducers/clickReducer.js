import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: 'Atualizado pelo redux'
};

export const clickReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_UPDATE_VALUE:
            return {
                ...state,//recupera o estado anterior
                newValue: action.newValue
            };
        default:
            return state;
    }
};