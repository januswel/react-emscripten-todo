const TOGGLE = 'toggle'

const initial = [
  new Module.Todo('define domain rules'),
  new Module.Todo('set up react-redux'),
  new Module.Todo('build components with domain')
]

export default (state = initial, action) => {
  switch (action.type) {
    case TOGGLE:
      const todo = state[action.id]
      todo.toggle()
      const result = Object.assign([], state)
      result[action.id] = todo
      return result
    default:
      return state
  }
}

export const toggle = (id) => ({
  type: TOGGLE,
  id: id
})
