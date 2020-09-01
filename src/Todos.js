import React from 'react'
import { ToastContainer, toast} from 'react-toastify'

const delete_notify = () =>toast("You have deleted the event",{autoClose: 1500});
const skipped_notify = () =>toast("You have skipped the event",{autoClose: 1500});
const undo_notify = () =>toast("You have re-added the event",{autoClose: 1500});

const Todos = ({todos, skiptodos, deleteTodo, skipTodo, deleteskipTodo, undoskipTodo}) =>{
  const todolist = todos.length?(
    todos.map(i =>{
      return(
        <div className="row collection-item" key={i.id}>
            <div className="col-md-4 wrap-text">{i.content}</div>
            <button className ="btn btn-primary" onClick = {() => {deleteTodo(i.id);}}>Done</button>
            <button className ="btn btn-warning" onClick = {() => {skipTodo(i); skipped_notify();}}>Skip</button>
            <ToastContainer/>
        </div>
      )
    }))
    :(
    <h5 className="center text-large">Please add the event below</h5>
  )
    const skiptodolist = skiptodos.length?(
      skiptodos.map(i =>{
        return(
          <div className = "row collection-item" key={i.id}>
            <div className="col-md-4 skip-content wrap-text">{i.content}</div>
              <button className ="btn btn-danger" onClick = {() => {deleteskipTodo(i.id); delete_notify();}}>Delete</button>
              <button className ="btn btn-warning" onClick = {() => {undoskipTodo(i); undo_notify();}}>Undo</button>
              <ToastContainer/>
          </div>
        )
      }))
      :(
      <h5 className="center text-large">Try not to skip any event</h5>
  )

  return(
    <div className="todo-list center blue-text">
      <h2>Todo's</h2>
      {todolist}
      <h2>Skipped Todo's</h2>
      {skiptodolist}
    </div>
  )
}



export default Todos
