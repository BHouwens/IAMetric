import React from 'react';
import styles from './SimilarityFilter.css';

export class SimilarityFilterComponent extends React.Component {
    render(){
        return(
            <div className={styles.similarityFilter}>
                <input type="range" />
            </div>
        );
    }
}