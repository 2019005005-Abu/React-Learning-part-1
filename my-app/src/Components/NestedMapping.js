import React from "react";
function NestedMapping(){
    const users=[
        {
         fullName:"Name-1",
         age:24,
         phonumber:[
            {home_mobile_number:"7373636"},
            {office_mobile_number:"73636363"}
         ],
        },
        
            {
                fullName:"Name-2",
                age:25,
                phonumber:[
                   {home_mobile_number:"7373636"},
                   {office_mobile_number:"73636363"}
                ],
               },
               {
                fullName:"Name-3",
                age:26,
                phonumber:[
                   {home_mobile_number:"7373636"},
                   {office_mobile_number:"73636363"}
                ],
               },
               {
                fullName:"Name-4",
                age:27,
                phonumber:[
                   {home_mobile_number:"7373636"},
                   {office_mobile_number:"73636363"}
                ],
               }
    ]
    return(
        <div>
          <h1>
            This is Nested Mapping
             {
                users.map((user,index)=>{
                 return(
                    <article key={index}>
                       <p>{user.fullName} </p>
                       <p>{user.age}</p>
                       {
                        user.phonumber.map((number)=>{
                            return(
                              <div>
                              <p>Home:{number.home_mobile_number}</p>
                              <p>Office:{number.office_mobile_number}</p>
                             </div>
                            )
                        })
                       }
                    </article>
                 )
                })
             }
            </h1>
        </div>
    )
}
export default NestedMapping;