import React from 'react';
import { BubbleMatrix } from '../../containers/BubbleMatrix';
import { AverageMetric } from '../../containers/AverageMetric';

import styles from './App.pcss';

export class App extends React.Component {

    render() {
        return (
            <div className={styles.app}>
                <section className={styles.header}>
                    <AverageMetric />
                </section>

                <BubbleMatrix />
            </div>
        );
    }
}