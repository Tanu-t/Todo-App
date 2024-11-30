import "bootstrap/dist/css/bootstrap.min.css"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import TodoListProvider from "./store/todo-store"


function App() {

return( 

<TodoListProvider>

<AppName></AppName>
<AddTodo></AddTodo>
<WelcomeMessage></WelcomeMessage>
<TodoItems></TodoItems>

</TodoListProvider>

);

}

export default App;
