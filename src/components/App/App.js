import React from 'react';
import d3 from 'd3';
import { DotChart } from '../../utils/dotChart';

import styles from './App.css';

export class App extends React.Component {
    componentDidMount() {
        this.a = new DotChart(this.refs.a);
    }

    render() {
        return (
            <div className={styles.app}>
                <svg ref="a" id="chart"></svg>
            </div>
        );
    }
}