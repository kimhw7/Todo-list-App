export default function Todo({todo, handleClick}) {

  return (
    <div key={todo.id} className="todoWrapper">
      <input type='checkbox'></input>
      <span>{todo.body}</span>
      <button onClick={(e) => 
          handleClick(todo)
        }>x</button>
    </div>

  )
}