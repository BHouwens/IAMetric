import { connect } from 'react-redux';
import { updateEffectiveness, resetEffectiveness } from '../actions/bubbleMatrixActions';
import { BubbleMatrixComponent } from '../components/BubbleMatrix/BubbleMatrixComponent';

function mapStateToProps(state) {
    let { bubbleMatrix } = state;
    return { data: bubbleMatrix.data };
}

function mapDispatchToState(dispatch) {
    return {
        tickHoverOn: effectiveness => {
            dispatch(updateEffectiveness(effectiveness));
        },
        tickHoverOff: _ => {
            dispatch(resetEffectiveness());
        }
    }
}

export const BubbleMatrix = connect(
    mapStateToProps,
    mapDispatchToState
)( BubbleMatrixComponent );
