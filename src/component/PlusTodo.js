import { useState, useEffect } from "react"

export default function PlusTodo({ handleSubmit, id }) {
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState('');
  const handleClick = () => {
    setIsOpen(true);
  }

  // const submitTodo = (id, body) {

  // }
  const onSubmit = e => {
    if(e.key === 'Enter') {
      handleSubmit( id + 1, body)
      setIsOpen(false)
    } else{
      setBody(e.target.value)
    }
  }
  return (
    isOpen ? 
    <div className="inputWrapper">
      <input type={"text"} placeholder="please type your todo" onKeyUp={onSubmit}></input>
      
    </div>
    : <button onClick={() => handleClick()}>plus todo</button>
  )
}