import { INCREMENT, DECREMENT } from '../constants'

export default function counter(state = {}, action) {
  console.log("action.tpye: ", action.type);
  switch (action.type) {
    case INCREMENT:
      console.log('process increment');
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      console.log('process decrement');
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      console.log('process default action');
      return state;
  }
}
