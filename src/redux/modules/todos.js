const TOGGLE = 'toggle'
const ADD = 'add'

const initial = [
  new Module.Todo('define domain rules'),
  new Module.Todo('set up react-redux'),
  new Module.Todo('build components with domain')
]

export default (state = initial, action) => {
  switch (action.type) {
    case TOGGLE: {
      const todo = state[action.id]
      todo.toggle()
      const result = Object.assign([], state)
      result[action.id] = todo
      return result
    }
    case ADD: {
      const newTodo = new Module.Todo(action.task)
      const result = Object.assign([], state)
      result.push(newTodo)
      return result
    }
    default:
      return state
  }
}

export const toggle = (id) => ({
  type: TOGGLE,
  id
})

export const add = (task) => ({
  type: ADD,
  task
})
