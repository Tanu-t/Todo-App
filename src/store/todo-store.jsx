
import { createContext,useState } from "react";


export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});

// eslint-disable-next-line react/prop-types
const TodoListProvider = ( {children} ) => {

 
let initialtodoItems =[
    {
        name:"Buy Coffee",
        date:"24/06/24",
        },
        {
            name:"Go to College",
            date:"24/06/24",
        },
        {
            name:"Go to bhaad me",
            date:"24/06/24",
        },

]
const[todoItems, setTodoItems] = useState(initialtodoItems);


function addNewItem(itemName,itemDueDate){ 
    console.log(`${itemName} ${itemDueDate}`);
    const newTodoItems = [...todoItems,{
        name:itemName, date:itemDueDate
    },];
    setTodoItems(newTodoItems)
}
function deleteItem(todoItemName){
    const newTodoItems = todoItems.filter((item)=>(
        item.name !== todoItemName
    ))
    setTodoItems(newTodoItems)

}   
    return ( 
        <TodoItemsContext.Provider value={{  todoItems, addNewItem, deleteItem }}>      
            {children}
        </TodoItemsContext.Provider>
    );
};

export default TodoListProvider;
  
    
