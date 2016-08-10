import * as rawData from '../sample.json';

const initialState = {
    improvement: false,
    data: rawData.default
};

export function bubbleMatrix(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, { data : action.data });
        
        case 'TOGGLE_IMPROVEMENT':
            return Object.assign({}, state, { improvement : true });

        case 'CLOSE_IMPROVEMENT':
            return Object.assign({}, state, { improvement : false });

        default:
            return state;
    }
}