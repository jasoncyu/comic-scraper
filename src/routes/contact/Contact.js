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
import { createStore } from 'redux'
import s from './Contact.scss';
import Counter from '../../components/Counter'

const title = 'Contact Us';

const store = createStore(counter)

function Contact(props, context) {
  context.setTitle(title);
  const onIncrement = () => {
    store.dispatch({
      type: 'INCREMENT',
    })
  }

  const onDecrement = () => {
    store.dispatch({
      type: 'DECREMENT',
    })
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>...</p>
        <Counter
          value={store.getState()}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
}

Contact.contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default withStyles(s)(Contact);
