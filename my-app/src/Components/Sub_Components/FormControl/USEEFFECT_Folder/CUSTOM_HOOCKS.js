
import React,{useEffect,useState} from "react";
import useFetch from './useFetch'
function CUSTOM_HOOCKS(){
const {data,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/todos')

   const todoElement=data && data.map((todo)=>{
        return(
            <p key={todo.id}>{todo.title}</p>
        )
    })
   const errorMessage=`Here is a Error`
   const loadingMessage=`Data is Loading`
   
 return(
    <div>
        <h1>Using Custom-Hooks</h1>
        <h1>Todo</h1>
         {error && errorMessage}
         {isLoading && loadingMessage}
         {todoElement}
    </div>
 )
    
}
export default CUSTOM_HOOCKS;