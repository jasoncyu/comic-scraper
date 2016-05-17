import { INCREMENT, DECREMENT } from '../constants'

module.exports = {
  increment() {
    return {
      type: INCREMENT,
    }
  },
  decrement() {
    return {
      type: DECREMENT
    }
  }
}
