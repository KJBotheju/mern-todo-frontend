import React from 'react'
import './ToDo.css'
import { MdEdit, MdDelete } from "react-icons/md";


const Todo = ({text,updateToDo,deleteToDo}) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
      <MdEdit className='editicon' onClick={updateToDo}/>
      <MdDelete className='deleteicon' onClick={deleteToDo}/>
      </div>
    </div>
  )
}

export default Todo
