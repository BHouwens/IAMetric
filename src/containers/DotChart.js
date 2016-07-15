import { connect } from 'react-redux';
import { DotChartComponent } from '../components/DotChart/DotChartComponent';

function mapStateToProps(state) {
    let { dotChart } = state;
    return { data: dotChart.data };
}

export const DotChart = connect(
    mapStateToProps
)( DotChartComponent );
