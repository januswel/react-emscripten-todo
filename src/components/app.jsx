import React from 'react'
import Todo from './todo.jsx'

export default (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          todo={todo}
          {...props}
        />
      ))}
    </div>
  )
}
