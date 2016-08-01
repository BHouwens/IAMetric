import { select } from 'd3-selection';
import { scalePoint, scaleSqrt, scaleLinear } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { interpolateRgb } from 'd3-interpolate';
import { range as arrayRange } from 'd3-array';

const defaultConfig = {
    width: 700,
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
        this.radius;

        Object.assign(this, defaultConfig, config);

        this.line_width = this.width - this.margin.left;
        this.max_radius = this.height / 60;
        this.init();
    }


    /**
     *  Initialises the chart
     */

    init() {
        this.constructChart();
        this.constructYAxis();
        this.constructXAxis();
        this.constructHorizontalGrid();
        this.constructBubbles();
    }


    /**
     *  Constructs the chart itself
     */

    constructChart() {
        let { element, width, height, margin } = this;

        this.chart = select(element)
            .attr('width', width + (margin.left * 2) + (margin.right * 2))
            .attr('height', height + margin.top + (margin.bottom * 2))
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        this.radius = scaleSqrt().range([1, this.max_radius]);
    }


    /**
     *  Constructs the y-axis
     */

    constructYAxis() {
        let { height, data, margin } = this,
            rows = data.categories;

        let yLabels = scalePoint()
            .domain(rows.map(row => row.category))
            .range([0, height]);

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
            .attr('transform', `translate(${margin.left * 2}, ${height + margin.top})`)
            .call(this.xAxis);
    }


    /**
     *  Constructs the horiztonal grid lines
     */

    constructHorizontalGrid() {
        let { data, y, width, margin } = this;

        this.chart.append('g')
            .attr('class', 'grid')
            .selectAll('rect')
            .data(data.categories)
            .enter()
                .append('rect')
                .attr('y', (_, idx) => y(idx))
                .attr('x', margin.left * 2)
                .attr('width', width)
                .attr('height', 1);
    }


    /**
     *  Construct the data-driven bubbles
     */

    constructBubbles() {
        let { data, margin, x, y, radius } = this,
            rows = data.categories,
            columns = data.cards,
            bubbles = this.chart.append('g')
                .attr('class', 'bubbles')
                .attr('transform', `translate(${margin.left}, 0)`);

        let { colourScale, colours } = this.getColourInterpolation('#6CAEFA', '#1567c4');

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i],
                bubble = bubbles.append('g')
                    .attr('class', 'row')
                    .selectAll('circle')
                    .data(row.values)
                    .enter();

            bubble.append('circle')
                  .attr('class', (_, idx) => row.category + ' ' + columns[idx])
                  .attr('data-value', (_, idx) => row.values[idx])
                  .attr('cy', () => y(i))
                  .attr('cx', (_, idx) => x(idx) + margin.left)
                  .attr('fill', data => colours( colourScale(data) ))
                  .attr('r', data => radius(data));
        }
    }


    /**
     *  Creates a colour interpolation for bubbles
     * 
     *  @param {string} firstColour - Lower bound of interpolation
     *  @param {string} secondColour - Upper bound of interpolation
     */

    getColourInterpolation(firstColour, secondColour) {
        let { data } = this,
            rows = data.categories,
            expandedValues = rows.map(entry => entry.values),
            finalValues = [].concat.apply([], expandedValues);

        return {
            colourScale : scaleLinear().domain([0, Math.max(...finalValues)]).range([0, 1]),
            colours : interpolateRgb(firstColour, secondColour)
        };
    }

}