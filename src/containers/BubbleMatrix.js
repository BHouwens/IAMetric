import { connect } from 'react-redux';
import { updateEffectiveness, resetEffectiveness, closeImprovement } from '../actions/bubbleMatrixActions';
import { BubbleMatrixComponent } from '../components/BubbleMatrix/BubbleMatrixComponent';

function mapStateToProps(state) {
    let { bubbleMatrix } = state;
    return { 
        data: bubbleMatrix.data,
        improvement: bubbleMatrix.improvement 
    };
}

function mapDispatchToState(dispatch) {
    return {
        tickHoverOn: effectiveness => {
            dispatch(updateEffectiveness(effectiveness));
        },
        tickHoverOff: () => {
            dispatch(resetEffectiveness());
        },
        onCloseImprovement: () => {
            dispatch(closeImprovement());
        }
    }
}

export const BubbleMatrix = connect(
    mapStateToProps,
    mapDispatchToState
)( BubbleMatrixComponent );
