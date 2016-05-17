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

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter.counterValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      console.log('onIncrement in mapdispatch');
      dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      console.log('onDecrement in mapdispatch');
      dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Counter));
