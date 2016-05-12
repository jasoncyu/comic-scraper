import { expect } from 'chai';
import { createStore } from 'redux'

// Start with default if no state is passed
const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return state
  }
}

const store = createStore(counter)

describe('Counter', () => {
  it('takes INCREMENT actions', () => {
    expect(counter(0, {type: 'INCREMENT'})).to.equal(1)
  })

  it('takes DECREMENT actions', () => {
    expect(counter(1, {type: 'DECREMENT'})).to.equal(0)
  });
})
