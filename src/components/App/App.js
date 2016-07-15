import React from 'react';
import { DotChart } from '../../containers/DotChart';
import styles from './App.css';

export class App extends React.Component {

    render() {
        return (
            <div className={styles.app}>
                <DotChart />
            </div>
        );
    }
}