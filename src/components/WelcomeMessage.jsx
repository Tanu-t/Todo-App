import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-store";


const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.length === 0 && <h3 className="text-center mt-4 fw-bold">Enjoy your day</h3>}
    </div>
  )
}

export default WelcomeMessage
