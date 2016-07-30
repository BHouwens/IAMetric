import * as rawData from '../sample.json';

const initialState = {
    data: rawData.default
};

export function bubbleMatrix(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, { data : action.data });
        default:
            return state;
    }
}