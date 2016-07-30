import { combineReducers } from 'redux';
import { bubbleMatrix } from './bubbleMatrixReducer';
import { averageMetric } from './averageMetricReducer';
import { painPointButton } from './painPointButtonReducer';

export const rootReducer = combineReducers({
    bubbleMatrix,
    averageMetric,
    painPointButton
});