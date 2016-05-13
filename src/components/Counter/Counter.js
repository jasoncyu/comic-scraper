import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'

// Start with default if no state is passed
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

class Counter extends Component {
  render(value, onIncrement, onDecrement) {
    return (
      <div>
        <div>{value}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}

export default withStyles(s)(Counter);
