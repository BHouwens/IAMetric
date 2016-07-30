import { connect } from 'react-redux';
import { BubbleMatrixComponent } from '../components/BubbleMatrix/BubbleMatrixComponent';

function mapStateToProps(state) {
    let { bubbleMatrix } = state;
    return { data: bubbleMatrix.data };
}

export const BubbleMatrix = connect(
    mapStateToProps
)( BubbleMatrixComponent );
