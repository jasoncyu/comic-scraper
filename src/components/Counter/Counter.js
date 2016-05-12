import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.scss'

class Counter extends Component {
  render() {
    return (
      <div>
        Counter
      </div>
    )
  }
}

export default withStyles(s)(Counter);
