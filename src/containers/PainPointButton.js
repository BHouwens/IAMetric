import { connect } from 'react-redux';
import { showPainPoints } from '../actions/painPointButton';
import { PainPointButtonComponent } from '../components/PainPointButton/PainPointButtonComponent';

function mapStateToProps(state) {
    let { paintPointButton } = state;
    return { className: paintPointButton.className };
}

function mapDispatchToState(dispatch) {
    return {
        onButtonPress: () => {
            dispatch(showPainPoints);
        }
    }
}

export const PainPointButton = connect(
    null
)( PainPointButtonComponent );