import React from 'react';
import styles from './AverageMetric.pcss';

export class AverageMetricComponent extends React.Component {

    render() {
        let { metric, description, className, improvement, showImprovement } = this.props,
            improvementClass = improvement ? styles.active : '';

        return (
            <div className={styles.metric}>
                <h1>{metric}%</h1>

                <section className={styles.container}>
                    <h2>{description}</h2>
                    <a onClick={showImprovement} className={styles[className]}>How can I improve this?</a>
                </section>

                <section className={styles.improvement + ' ' + improvementClass}>
                    <section className={styles.improvementText}>
                        <p>
                            The effectiveness of this IA is determined by how much your users have clustered cards into one or two categories. The more cards in one category, the better.
                        </p>

                        <p className={styles.specific}>
                            The score of {metric}% for this IA could be improved by:
                        </p>

                        <ol className={styles.specific}>
                            <li>Getting rid of cards that are never categorised (such as <span>"snake"</span>)</li>
                            <li>Renaming cards that users don't often place in any category, making them clearer (such as <span>"velociraptor"</span>)</li>
                            <li>Creating more definitive categories so that users are clear on what they mean (such as <span>"mammals"</span>)</li>
                        </ol>
                    </section>
                </section>
            </div>
        );
    }
}