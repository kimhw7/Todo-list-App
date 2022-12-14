import Header from "../Header"
import Todo from "../component/Todo"
import PlusTodo from "../component/PlusTodo"

export default function Todolist({todoData, setTodoData, deleteTodo, plusTodo, id}) {

  const handleClick = (item) => {
    deleteTodo(item.id)
    console.log(item)
   }

  const handleSubmit = (id, body) => {
    plusTodo(id, body);
  }
  return (
    <div className="pageWrapper">
      <Header />
      <PlusTodo handleSubmit={handleSubmit} id={id}/>
      <div className="todoWrapper">
        {todoData.map((data, idx) => <Todo key={idx} todo={data} handleClick={handleClick} />)}
      </div>
    </div>
    

  )
}