import { combineReducers } from 'redux';
import { dotChart } from './dotChartReducer';
import { averageMetric } from './averageMetricReducer';
import { painPointButton } from './painPointButtonReducer';

export const rootReducer = combineReducers({
    dotChart,
    averageMetric,
    painPointButton
});