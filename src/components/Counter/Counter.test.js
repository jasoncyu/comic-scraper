import { counter } from './Counter'
import { expect } from 'chai';

describe('Counter', () => {
  it('takes INCREMENT actions', () => {
    expect(counter(0, {type: 'INCREMENT'})).to.equal(1)})
})
