const initialState = {
    metric: 37,
    description: 'Average IA Effectiveness',
    className: 'active',
    improvement: false
};

export function averageMetric(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_EFFECTIVENESS':
            return { 
                metric : action.metric,
                className : '',
                description : 'Effectiveness for Current Card',
                improvement: false
            };

        case 'RESET_EFFECTIVENESS':
            return initialState;

        case 'TOGGLE_IMPROVEMENT':
            return Object.assign(state, {}, {
                improvement: true
            });

        case 'CLOSE_IMPROVEMENT':
            return Object.assign(state, {}, {
                improvement: false
            });
            
        default:
            return state;
    }
}