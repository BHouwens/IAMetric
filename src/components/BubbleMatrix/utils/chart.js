import { select } from 'd3-selection';
import { scalePoint } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { range as arrayRange } from 'd3-array';

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
        this.constructChart();
        this.constructYAxis();
        this.constructXAxis();
        this.constructBubbles();
    }


    /**
     *  Constructs the chart itself
     */

    constructChart() {
        let { element, width, height, margin } = this;

        this.chart = select(element)
            .attr('width', width + margin.left + (margin.right * 2))
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
    }


    /**
     *  Constructs the y-axis
     */

    constructYAxis() {
        let { height, data, margin } = this,
            rows = data.categories;

        let yLabels = scalePoint()
            .domain(rows.map(row => row.category))
            .range([height, 0]);

        this.y = scalePoint()
            .domain(arrayRange(0, rows.length))
            .range([0, height]);

        this.yAxis = axisLeft(yLabels);

        this.chart.append('g')
            .attr('transform', `translate(${margin.left}, 0)`)
            .attr('class', 'y-axis')
            .call(this.yAxis);
    }


    /**
     *  Constructs the x-axis
     */

    constructXAxis() {
        let { width, height, margin, data } = this,
            columns = data.cards;

        let xLabels = scalePoint()
            .domain(columns.map(card => card))
            .range([0, width]);

        this.x = scalePoint()
            .domain(arrayRange(0, columns.length))
            .range([0, width]);

        this.xAxis = axisBottom(xLabels);

        this.chart.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(${margin.left}, ${height})`)
            .call(this.xAxis);
    }


    /**
     *  Construct the data-driven bubbles
     */

    constructBubbles() {
    }

}