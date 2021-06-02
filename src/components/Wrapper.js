import { connect } from 'react-redux';
import {decrement, increment, reset} from './../actions/actions';
import Counter from './Counter';

const mapStateToProps = (state) => {
    return {
        counter: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)