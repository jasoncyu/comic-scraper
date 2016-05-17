import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'
import { increment, decrement } from '../../actions/counter'

function Counter(props, context) {
  console.log("props: ", props);
  return (
    <div>
      <div>{props.counterValue}</div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
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
