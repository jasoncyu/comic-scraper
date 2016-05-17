import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'
import { increment, decrement } from '../../actions/counter'

function Counter({ counterValue, onIncrement, onDecrement }, context) {
  return (
    <div>
      <div>counterValue</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}
Counter.contextTypes = {
  store: PropTypes.object.isRequired,
}

export default connect(state => ({
  counterValue: state.counterValue,
}), {
  increment, decrement,
})(withStyles(s)(Counter));
