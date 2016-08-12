import React from 'react';
import { Chart } from './utils/chart';
import { calculateCardEffectiveness } from './utils/effectiveness';

import styles from './BubbleMatrix.pcss';

export class BubbleMatrixComponent extends React.Component {

    /**
     *  Sets up the chart and sets up
     *  event listeners
     */

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


    /**
     *  Sets up the axis ticks for the mouse events
     */

    setupDispatches() {
        let xAxisTicks = this.chart.axisTicks('x-axis'),
            yAxisTicks = this.chart.axisTicks('y-axis');

        this.handleMouseEvents(xAxisTicks, yAxisTicks);
    }


    /**
     *  Sets up listeners for mouse events
     * 
     *  @param {Object} xAxisTicks - D3-selected x-axis ticks
     *  @param {Object} yAxisTicks - D3-selected y-axis ticks
     */

    handleMouseEvents(xAxisTicks, yAxisTicks) {
        let { tickHoverOn, tickHoverOff } = this.props,
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

        yAxisTicks.on('mouseenter', d => {
            let values = [].slice.call(domBubbles)
                .filter(entry => entry.className.baseVal.indexOf(d) != -1)
                .map(entry => entry.getAttribute('data-value'));

            tickHoverOn(calculateCardEffectiveness(values));
            this.chart.onMouseEnterForChart(d, yAxisTicks);

        }).on('mouseleave', _ => { 
            tickHoverOff(); 
            this.chart.onMouseLeaveForChart(yAxisTicks);
        });
    }


    render() {
        let { improvement, onCloseImprovement } = this.props,
            improvementClass = improvement ? styles.active : '';

        return (
            <div className={styles.container}>
                <span className={styles.close + ' ' + improvementClass} onClick={onCloseImprovement} title="Close"></span>
                <div onClick={onCloseImprovement} className={styles.cover + ' ' + improvementClass} title="Clicking this will hide improvement information"></div>
                <svg ref="chart"></svg>
            </div>
        );
    }
}