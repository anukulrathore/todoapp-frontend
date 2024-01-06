import React from 'react'
import "./Createtodo.css"
const Displaytodo = ({todos}) => {
  return (
    <div className='container'>
       {todos && todos.map((todo)=>{
        return <div key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>{todo.completed===true?"Completed":"Mark as Complete"}</button>
        </div>
       })}
    </div>
  )
}

export default Displaytodo
