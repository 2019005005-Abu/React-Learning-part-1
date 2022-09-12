import React,{useState} from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState('');

    const handleInputChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      props.onTodo(todo)
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
    <label for="todo" htmlFor='todo'>New Todo</label>
     <input type="text" id="todo" name="todo"
     value={todo} onChange={handleInputChange}
     />
    </div>
    <div>
    <button>Add-Todo</button>
    </div>
    
    </form>
  )
}

export default NewTodo
