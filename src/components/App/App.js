import React from 'react';
import { DotChart } from '../../containers/DotChart';
import { AverageMetric } from '../../containers/AverageMetric';
import { PainPointButton } from '../../containers/PainPointButton';

import styles from './App.css';

export class App extends React.Component {

    render() {
        return (
            <div className={styles.app}>
                <section className={styles.header}>
                    <AverageMetric />
                    <PainPointButton />
                </section>

                <DotChart />
            </div>
        );
    }
}