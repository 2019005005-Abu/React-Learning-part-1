import React from 'react';
import {v4 as uuidv4}  from 'uuid';
function Unique(){
    const todos=[
    {id:uuidv4(),name:"Studying-1",
    University:"University-1"},
    {id:uuidv4(),name:"Studying-2",
    University:"University-2"},
     {id:uuidv4(),name:"Studying-3",University:"University-3"},
    {id:uuidv4(),name:"Studying-4",
    University:"University-4"},
    {id:uuidv4(),name:"Studying-5",
    University:"University-5"},
    ]
    return(
     <div>
     
        {
         todos.map((todo)=>{
            return(
                <div key={uuidv4()}>
                    <h3>{todo.name}</h3>
                    <p>{todo.University}</p>
                </div>
            )
         })
        }
     </div>
    )
}
export default Unique;