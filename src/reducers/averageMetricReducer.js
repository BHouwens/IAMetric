const initialState = {
    metric: 37,
    description: 'Average IA Effectiveness',
    className: 'active'
};

export function averageMetric(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_METRIC':
            let { metric, description, className } = action;
            return Object.assign({}, state, { metric, description, className });
            
        default:
            return state;
    }
}