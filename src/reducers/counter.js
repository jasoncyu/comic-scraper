import { INCREMENT, DECREMENT } from '../constants'

export default function counter(state = { counterValue: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    case DECREMENT:
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    default:
      return state;
  }
}
