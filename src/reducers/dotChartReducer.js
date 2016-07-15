const initialState = {
    data: [
        {
            x: 'A',
            y: 1
        },
        {
            x: 'B',
            y: 2
        }
    ]
};

export function dotChart(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, { data : action.data });
        default:
            return state;
    }
}