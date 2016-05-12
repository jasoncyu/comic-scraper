const counter = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
}

module.exports = {counter}
