/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {
  PropTypes
} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';

// Start with default if no state is passed
const counter = (state = 0, action) => {
  console.log("state: ", state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
import Counter from '../../components/Counter'

const title = 'Contact Us';

function Contact(props, context) {
  context.setTitle(title);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>...</p>
        <Counter />
      </div>
    </div>
  );
}

Contact.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
};

export default withStyles(s)(Contact);
