const initialState = {
    className: ''
};

export function painPointButton(state = initialState, action) {
    switch(action.type) {
        case 'SHOW_PAIN_POINTS':
            return state;
        default:
            return state;
    }
}