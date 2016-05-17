import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'
import { increment, decrement } from '../../actions/counter'

function Counter({
  counterValue,
  onIncrement,
  onDecrement,
}) {
  return (
    <div>
      <div>{counterValue}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

Counter.propTypes = {
  counterValue: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter.counterValue,
  }
}

const mapDispatchToProps = { onIncrement: increment, onDecrement: decrement }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Counter));
