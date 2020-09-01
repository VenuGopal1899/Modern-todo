import React from 'react'

const SkipTodo = ({skiptodos, skipTodo}) =>{
  const skiptodolist = skiptodos.length?(
    skiptodos.map(i =>{
      return(
        <div className = "collection-item" key={i.id}>
        <span className= "skip-content">{i.content}</span>
        </div>
      )
    }))
    :(
    <p className="empty">You've skipped nothing</p>
  )

  return(
    <div className = "Skip-Todo's collection">
      {skiptodolist}
    </div>


  )
}
export default SkipTodo
