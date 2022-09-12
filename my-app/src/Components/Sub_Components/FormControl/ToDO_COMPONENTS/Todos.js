import React from 'react'

const Todos = (propsValu) => {
 console.log(propsValu.todos);
  return (
    <div>
    {
     propsValu.todos.map((todoItem,index)=>{
        return(
            <p key={index}>{todoItem}</p>
        )
     })
     }
    </div>
  )
}

export default Todos
