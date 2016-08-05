/*--------- D3 Modules ---------*/

import { select, selectAll } from 'd3-selection';
import { scalePoint, scaleSqrt, scaleLinear } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { interpolateRgb } from 'd3-interpolate';
import { range as arrayRange } from 'd3-array';
import { transition } from 'd3-transition';

/*---------*/


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

        this.width = this.width - ((this.margin.left * 2) + (this.margin.right * 2));
        this.max_radius = this.height / 50;
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

        let svgYAxis = this.chart.append('g')
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

        let svgXAxis = this.chart.append('g')
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
                .attr('class', (_, idx) => `bubble ${row.category} ${columns[idx]}`)
                .attr('data-value', (_, idx) => row.values[idx])
                .attr('cy', () => y(i))
                .attr('cx', (_, idx) => x(idx) + margin.left)
                .attr('fill', data => colours(colourScale(data)))
                .attr('r', data => radius(data));

            let amountCircle = bubble.append('g')
                .attr('class', (_, idx) => `amount ${row.category} ${columns[idx]}`)
                .attr('transform', (_, idx) => `translate(${x(idx) + margin.left}, ${y(i)})`);

            amountCircle.append('circle')
                .attr('fill', '#000')
                .attr('r', 13);

            amountCircle.append('text')
                .attr('text-anchor', 'middle')
                .attr('fill', '#fff')
                .attr('y', '1%')
                .text((_, idx) => row.values[idx]);
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
            colourScale: scaleLinear().domain([0, Math.max(...finalValues)]).range([0, 1]),
            colours: interpolateRgb(firstColour, secondColour)
        };
    }


    /**
     *  Performs the chart-related behavioural changes
     *  on mouse enter
     * 
     *  @param {string} d - The value of the tick hovered over
     *  @param {Object} axisTicks - All ticks for the current axis
     */

    onMouseEnterForChart(d, axisTicks) {
        let bubbles = select('.bubbles').selectAll('.bubble').transition().duration(200),
            domBubbles = document.querySelectorAll('.bubble'),
            amounts = selectAll('.amount'),
            domAmounts = document.querySelectorAll('.amount'),
            grid = select('.grid').transition().duration(200),
            allTicks = axisTicks.transition().duration(200);

        grid.attr('opacity', '0.5');
        allTicks.attr('opacity', t => t == d ? '1' : '0.1');
        bubbles.attr('opacity', (_, i) => {
            return domBubbles[i].className.baseVal.indexOf(d) == -1 ? '0.1' : '1'
        });

        amounts.attr('class', (_, i) => {
            return domAmounts[i].className.baseVal.indexOf(d) == -1 ? 
                   domAmounts[i].className.baseVal : 
                   domAmounts[i].className.baseVal + ' active';
        })
    }


    /**
     *  Performs the chart-related behavioural changes
     *  on mouse leave
     * 
     *  @param {Object} axisTicks - All ticks for the current axis
     */

    onMouseLeaveForChart(axisTicks) {
        let bubbles = select('.bubbles').selectAll('.bubble').transition().duration(200),
            grid = select('.grid').transition().duration(200),
            amounts = selectAll('.amount'),
            domAmounts = document.querySelectorAll('.amount'),
            allTicks = axisTicks.transition().duration(200);

        bubbles.attr('opacity', '1');
        grid.attr('opacity', '1');
        allTicks.attr('opacity', '1');

        amounts.attr('class', (_, i) => domAmounts[i].className.baseVal.replace(' active', ''));
    }


    /**
     *  Returns the ticks for the specified axis,
     *  allowing them to be exposed externally
     * 
     *  @param {string} axis - Axis class to select
     */

    axisTicks(axis) {
        return select('.' + axis).selectAll('.tick');
    }

}