import { useState } from "react";
import InputArea from "./component/InputArea";
import Todo from "./component/Todo";

function App() {


const [items,setItems]=useState([]);


function addItem(inputText)
{
  setItems(prevItems=>
  {
    return [...prevItems,inputText]
  });
  }

  function deleted(id){
    setItems(prevItems=>{
      return prevItems.filter(
        (item,index)=>{
          return index !==id

        }
      )

    });
  }

  return (
    
        <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea
     onAdd={addItem}
     />
      <div>
        
        <ul>
        {  items.map((todoItem,index) =>
          ( <Todo  key={index} id={index} text={todoItem}
            onChecked={deleted}/>
          
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
