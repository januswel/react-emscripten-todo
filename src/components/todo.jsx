import React from 'react'

export default (props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={props.todo.isDone}
          onChange={() => { props.actions.toggle(props.id) }}
          />
        {props.todo.task}
      </label>
    </div>
  )
}
