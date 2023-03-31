const Todo = ({todo, toggleComplete, deleteTodo}) => {
    return (  
        <li>
            <div>
                <input onChange={() => {toggleComplete(todo)}}type="checkbox" />
                <p onClick={() => {toggleComplete(todo)}}>{todo.text}</p>
            </div>
            <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
        </li>
    );
}
 
export default Todo;