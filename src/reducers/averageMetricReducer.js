const initialState = {
    metric: 37,
    description: 'Average IA Effectiveness',
    className: 'active'
};

export function averageMetric(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_EFFECTIVENESS':
            return { 
                metric : action.metric,
                className : action.metric == 100 ? '' : 'active',
                description : 'Effectiveness for Current Card'
            };

        case 'RESET_EFFECTIVENESS':
            return initialState;
            
        default:
            return state;
    }
}