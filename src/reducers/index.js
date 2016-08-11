import { combineReducers } from 'redux';
import { bubbleMatrix } from './bubbleMatrixReducer';
import { averageMetric } from './averageMetricReducer';

export const rootReducer = combineReducers({
    bubbleMatrix,
    averageMetric
});