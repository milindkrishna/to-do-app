import React from 'react';
import {BsTrashFill} from 'react-icons/bs'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capotalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capotalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex item-center`
}

function Todo({todo, toogleComplete, deletetodo}) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row} >
            <input onChange={() => toogleComplete(todo)} type="checkbox" checked= {todo.completed ? 'checked':''} />
            <p onClick={() => toogleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>   
        <button onClick={() => deletetodo(todo.id)}><BsTrashFill/></button> 
    </li>
  )
}

export default Todo