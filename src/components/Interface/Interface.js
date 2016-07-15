import React from 'react';
import { SimilarityFilter } from '../../containers/Interface';

import styles from './Interface.css';

export class InterfaceComponent extends React.Component {
    render() {
        return (
            <div className={styles.interface}>
                <SimilarityFilter />
            </div>
        );
    }
} 