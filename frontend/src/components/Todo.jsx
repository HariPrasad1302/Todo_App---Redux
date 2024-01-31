const Todo = ({todo}) =>{
    return(
        <li>
            <span>{todo.data}</span>
            <span>
                <i className="fas fa-trash"/>
            </span>
            <span>
                <i className="fas fa-pen"/>
            </span>
        </li>
    )
}
export default Todo;