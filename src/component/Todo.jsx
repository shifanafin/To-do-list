import React, { useState } from 'react'

function Todo(props) {


const [line,lineDrawn]=useState(false)

  function clicked(){
           lineDrawn(preValue=>{
            return !preValue;
           })
  } 
  

  return (
    <div 
    onDoubleClick={()=>
      {
        props.onChecked(props.id)}
      }
    onClick={clicked}>
    <li    style={{textDecoration:line ? "line-through":null}}>{props.text}</li>
    </div>
  )
}

export default Todo