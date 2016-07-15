import React from 'react';
import styles from './AverageMetric.css';

export class AverageMetricComponent extends React.Component {
    render() {
        let { metric, description, className } = this.props;

        return (
            <div className={styles.metric}>
                <h1>{metric}%</h1>
                <h2>{description}</h2>

                <a href="#" className={styles[className]}>How can I improve this?</a>
            </div>
        );
    }
}