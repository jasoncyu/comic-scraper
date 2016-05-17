import { INCREMENT, DECREMENT } from '../constants'

export default function counter(state = { counterValue: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      console.log('process increment');
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    case DECREMENT:
      console.log('process decrement');
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    default:
      console.log('process default action');
      return state;
  }
}
