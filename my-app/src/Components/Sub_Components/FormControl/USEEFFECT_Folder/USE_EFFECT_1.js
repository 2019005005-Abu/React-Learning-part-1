import React,{useEffect,useState} from "react";
const loadingMessage=<p style={{color:"yellow"}}>Todo is Loading</p>
const errorMessage=<p style={{color:"red",background:"yellow"}}>
    Here is a Error
</p>
function USE_EFFECT_1(){
    const [todos,setTodos]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            if(!response.ok)throw  Error("Fetching is not success")
            else return response.json()
        }).then((data)=>{
            setTodos(data);
            setIsLoading(false);
            setError(false);
        }).catch((err)=>{
            setError(error.message);
            isLoading(false)
        })
      },2000)
    },[])

   const  todoElement=todos &&
   todos.map((todo)=>{
        return(
            <p key={todo.id}>{todo.title}</p>
        )
    })
   
 return(
    <div>
        <h1>Todo</h1>
         {error && errorMessage}
         {isLoading && loadingMessage}
         {todoElement}
    </div>
 )
       
}
export default USE_EFFECT_1;