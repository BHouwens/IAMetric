import { connect } from 'react-redux';
import { AverageMetricComponent } from '../components/AverageMetric/AverageMetricComponent';

function mapStateToProps(state) {
    let { averageMetric } = state;
    return {
        metric: averageMetric.metric,
        description: averageMetric.description,
        className: averageMetric.className
    };
}

export const AverageMetric = connect(
    mapStateToProps
)( AverageMetricComponent );