import React from 'react'
import Todo from './todo.jsx'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  handleChange (target, event) {
    this.setState({
      [target]: event.target.value
    })
  }

  addNewTodo () {
    if (!this.state.newTodo) {
      return
    }

    this.props.actions.add(this.state.newTodo)
    this.setState({
      newTodo: ''
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              id={index}
              todo={todo}
              {...this.props}
            />
          ))}
        </div>
        <input
          type='text'
          value={this.state.newTodo}
          onChange={event => this.handleChange('newTodo', event)}
        />
        <button onClick={() => this.addNewTodo()}>add</button>
      </div>
    )
  }
}
