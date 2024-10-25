import React from 'react'


function TodoList(props) {
  return (
    <li className="list-item" key={props.index}>
      {props.item}
      <span className='icons'>
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => props.deleteItem(props.index)}
        ></i>
      </span>
    </li>
  )
}

export default TodoList