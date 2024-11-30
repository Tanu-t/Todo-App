function TodoItem({todoName,date,onDeleteClick}){
 return (<>

<div className="container mt-4 text-center">
      <div className="row">
        <div className="col-4">
         {todoName}
        </div>
        <div className="col-4">{date}</div>
        <div className="col-2">
        <button type="button"
        className="btn btn-danger" 
        onClick={ () => onDeleteClick(todoName)}>
        Delete</button></div>
      </div>
      
    </div>

    </>)
}
export default TodoItem;