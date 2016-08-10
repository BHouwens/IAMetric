import { connect } from 'react-redux';
import { toggleImprovement } from '../actions/averageMetricActions';
import { AverageMetricComponent } from '../components/AverageMetric/AverageMetricComponent';

function mapStateToProps(state) {
    let { averageMetric } = state;
    return {
        metric: averageMetric.metric,
        description: averageMetric.description,
        className: averageMetric.className,
        improvement: averageMetric.improvement
    };
}

function mapDispatchToState(dispatch) {
    return {
        showImprovement: () => {
            dispatch(toggleImprovement());
        }
    };
}

export const AverageMetric = connect(
    mapStateToProps,
    mapDispatchToState
)( AverageMetricComponent );