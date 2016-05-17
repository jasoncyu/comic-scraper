import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'

function Counter(props, context) {
  console.log("context.getState(): ", context.store.getState());
  return (
    <div>
      <div>asdfasdf</div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  )
}
Counter.contextTypes = {
  store: PropTypes.object.isRequired,
}

export default withStyles(s)(Counter);
