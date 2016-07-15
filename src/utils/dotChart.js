import d3 from 'd3';
import { scaleOrdinal } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';

export class DotChart {

    /**
     *  A dot-bubble chart to display discrete data
     * 
     *  @param {string} element - Element to attach the chart to
     */

    constructor(element) {
        this.x;
        this.y;
        this.xAxis;
        this.yAxis;
        this.element = element;
        this.width = 400;
        this.height = 300;

        this.init();
    }


    /**
     *  Initialises the chart
     */

    init() {
        let { element, width, height } = this;

        this.chart = d3.select(element)
                       .attr('width', width)
                       .attr('height', height);

        this.x = d3.scaleOrdinal()
                   .domain(['A', 'B'])
                   .range([0, 1]);

        this.y = d3.scaleOrdinal()
                   .domain(['X', 'Y'])
                   .range([0, 1]);

        this.xAxis = d3.axisBottom(this.x);
        this.yAxis = d3.axisLeft(this.y);
    }

}