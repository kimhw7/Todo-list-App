import Header from "../Header"
import Todo from "../component/Todo"

export default function Todolist(todoData, setTodoData, deleteTodo) {

  console.log(`todo data ${todoData}`)

  const handleClick = (item) => {
    deleteTodo(item.id)
    console.log(item)
   }

  return (
    <div className="pageWrapper">
      <Header />
      <div className="todoWrapper">
        {todoData.todoData.map((data, idx) => <Todo data={data} handleClick={handleClick} />)}
      </div>
    </div>
    

  )
}