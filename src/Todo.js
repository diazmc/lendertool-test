import React from 'react';

const Todo = (props) => {

  return (
    <li id={props.id} className='taskItem'>
      <span>{props.name}</span>
      <button onClick={() => props.deleteTask(props.id)} className='btn-delete'>Delete</button>
    </li>
  )
};

export default Todo;