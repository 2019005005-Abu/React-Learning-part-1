import React,{useState} from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos';

const dummyTodos=["todo-1","todo-2"]
const Home = () => {
    const[todos,setTodos]=useState(dummyTodos)
    const SendingTodElements=(newTodo)=>{
     setTodos([...todos,newTodo])
    }
  return (
    <div>
      <Todos todos={todos} />
      <NewTodo onTodo={SendingTodElements}/>
    </div>
  )
}

export default Home
