import React from 'react';
import { Chart } from './utils/chart';
import styles from './DotChart.css';

export class DotChartComponent extends React.Component {

    componentDidMount() {
        let { data } = this.props;

        this.chart = new Chart({
            element: this.refs.chart,
            data
        });
    }

    render() {
        return <svg ref="chart"></svg>
    }
}