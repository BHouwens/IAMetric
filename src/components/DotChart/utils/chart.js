import { select } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';

const defaultConfig = {
    width: 500,
    height: 300,
    element: '#chart',
    margin: {
        top: 30,
        left: 30,
        bottom: 30,
        right: 30
    }
};


export class Chart {

    /**
     *  A dot-bubble chart to display discrete data
     * 
     *  @param {Object} config - Config object, based on the defaultConfig above
     */

    constructor(config) {
        this.x;
        this.y;
        this.xAxis;
        this.yAxis;

        Object.assign(this, defaultConfig, config);

        this.init();
    }


    /**
     *  Initialises the chart
     */

    init() {
        let { element, width, height, margin } = this;

        this.constructAxes();

        this.chart = select(element)
                        .attr('width', width + margin.left + margin.right)
                        .attr('height', height + margin.top + margin.bottom)
                     .append('g')
                        .attr('transform', `translate(${margin.left}, ${margin.top})`)

        this.chart.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height})`)
            .call(this.xAxis);

        this.chart.append('g')
            .attr('class', 'y-axis')
            .call(this.yAxis);

        this.constructDots();
    }


    /**
     *  Construct the chart axes
     */

    constructAxes() {
        let { width, height, data } = this;

        this.x = scaleOrdinal()
                   .domain(data.map(datum => datum.x))
                   .range([0, width]);

        this.y = scaleOrdinal()
                   .domain(data.map(datum => datum.y))
                   .range([height, 0]);

        this.xAxis = axisBottom(this.x);
        this.yAxis = axisLeft(this.y);
    }


    /**
     *  Construct the bubble-dots
     */

    constructDots() {
        let { data } = this;

        let dot = this.chart.selectAll('.dot')
                    .data(data)
                    .enter()
                  .append('circle')
                    .attr('r', 3.5)
                    .attr('cx', d => d.x)
                    .attr('cy', d => d.y)
                    .attr('class', 'dot')
                    .style('fill', 'blue')
                  .exit()
                  .remove();
    }

}