import { select } from 'd3-selection';
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
        this.width = 500;
        this.height = 300;
        this.margin = {
            top: 30,
            left: 30,
            bottom: 30,
            right: 30
        };

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
            .attr("transform", "translate(0," + height + ")")
            .call(this.xAxis);

        this.chart.append('g')
            .attr('class', 'y-axis')
            .call(this.yAxis);
    }


    /**
     *  Construct the chart axes
     */

    constructAxes() {
        let { width, height } = this;

        this.x = scaleOrdinal()
                   .domain(['A', 'B'])
                   .range([0, width]);

        this.y = scaleOrdinal()
                   .domain(['X', 'Y'])
                   .range([height, 0]);

        this.xAxis = axisBottom(this.x);
        this.yAxis = axisLeft(this.y);
    }


    /**
     *  Construct the bubble-dots
     */

    constructDots() {

    }

}