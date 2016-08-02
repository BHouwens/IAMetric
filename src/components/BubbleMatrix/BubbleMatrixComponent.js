import React from 'react';
import { Chart } from './utils/chart';
import styles from './BubbleMatrix.css';

export class BubbleMatrixComponent extends React.Component {

    componentDidMount() {
        let { data } = this.props,
            width = document.querySelector('.'+styles.container).clientWidth;

        this.chart = new Chart({
            width,
            data,
            height: 400,
            element: this.refs.chart
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <svg ref="chart"></svg>
            </div>
        );
    }
}