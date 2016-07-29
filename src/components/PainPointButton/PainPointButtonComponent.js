import React from 'react';
import styles from './PainPointButton.css';

export class PaintPointButtonComponent extends React.Component {
    render() {
        let { className, onButtonPress } = this.props,
            currentClass = styles.painPoint + ' ' + styles[className];

        return (
            <button onClick={onButtonPress}>See Pain Points</button>
        );
    }
}