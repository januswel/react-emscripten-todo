import {
    combineReducers,
    createStore
} from 'redux'
import todos from './modules/todos.js'

const reducers = combineReducers({
  todos
})
const store = createStore(reducers)

export default store
