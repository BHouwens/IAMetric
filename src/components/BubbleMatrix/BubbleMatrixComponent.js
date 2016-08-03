import React from 'react';
import { Chart } from './utils/chart';
import { calculateCardEffectiveness } from './utils/effectiveness';

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

        this.setupDispatches();
    }

    setupDispatches() {
        let { tickHoverOn, tickHoverOff } = this.props,
            xAxisTicks = this.chart.axisTicks('x-axis'),
            yAxisTicks = this.chart.axisTicks('y-axis'),
            domBubbles = document.querySelectorAll('.bubble');

        xAxisTicks.on('mouseenter', d => {
            let values = [].slice.call(domBubbles)
                .filter(entry => entry.className.baseVal.indexOf(d) != -1)
                .map(entry => entry.getAttribute('data-value'));

            tickHoverOn(calculateCardEffectiveness(values));
            this.chart.onMouseEnterForChart(d, xAxisTicks);

        }).on('mouseleave', _ => { 
            tickHoverOff(); 
            this.chart.onMouseLeaveForChart(xAxisTicks);
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