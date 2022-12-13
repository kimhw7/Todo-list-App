export default function Todo(todo, handleClick) {

  return (
    <div key={todo.data.id} className="todoWrapper">
      <input type='checkbox'></input>
      <span>{todo.data.body}</span>
      <button onClick={(e) => 
          handleClick(todo.data)
        }>x</button>
    </div>

  )
}