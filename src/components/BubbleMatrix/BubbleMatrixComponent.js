import React from 'react';
import { Chart } from './utils/chart';
import styles from './BubbleMatrix.css';

export class BubbleMatrixComponent extends React.Component {

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