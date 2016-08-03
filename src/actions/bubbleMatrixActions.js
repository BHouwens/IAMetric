export function updateEffectiveness(effectiveness) {
    return {
        type: 'UPDATE_EFFECTIVENESS',
        metric: effectiveness
    };
}

export function resetEffectiveness() {
    return { 
        type: 'RESET_EFFECTIVENESS'
    };
}