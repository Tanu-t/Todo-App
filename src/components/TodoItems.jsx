/* eslint-disable react/jsx-key */
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-store";



// eslint-disable-next-line react/prop-types
function TodoItems(){
  const {todoItems,deleteItem} = useContext(TodoItemsContext);
    return (
        <>
       {todoItems.map((item)=>(
           <TodoItem todoName={item.name} date={item.date} onDeleteClick={deleteItem}></TodoItem>
       ))}
    
        </>
    )
}

export default TodoItems;