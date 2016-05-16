import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'

function Counter({onIncrement, onDecrement}) {
  return (
    <div>
      <div>0</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default withStyles(s)(Counter);
