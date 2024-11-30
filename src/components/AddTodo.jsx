import { useContext } from "react";
import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-store";

function AddTodo(){

  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);


  const handleAddButtonClicked = (event)=>{
    event.preventDefault()
   const todoName = todoNameElement.current.value;
   const todoDate = dueDateElement.current.value;
   todoNameElement.current.value ="";
   dueDateElement.current.value = "";
    addNewItem(todoName,todoDate);

  }
  return  <div>
    <div className="container text-center mt-4">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input type="text" 
          placeholder="Enter Todo Here"
          ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
          />
        </div>
        <div className="col-2"><button 
        className="btn btn-success px-5 py-2"
        >Add</button></div>
      </form>
    </div>
  </div>
}
export default AddTodo;