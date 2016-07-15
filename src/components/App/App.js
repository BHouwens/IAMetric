import React from 'react';
import { DotChartComponent } from '../DotChart/DotChartComponent';
import styles from './App.css';

export class App extends React.Component {

    render() {
        return (
            <div className={styles.app}>
                <DotChartComponent />
            </div>
        );
    }
}