import React,{useRef} from 'react'

const USEREF = () => {
 const userNameRef=useRef();
 const userEmailRef=useRef();
 const userPasswordRef=useRef();
    const HandleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form has submitted");
        const userName=userNameRef.current.value;
        const userEmail=userNameRef.current.value;
        const userPassword=userPasswordRef.current.value;
        const objectInformation={
            userName,
            userEmail,
            userPassword
        }
        console.log(objectInformation);
    }
  return (
        <form action='' onSubmit={HandleSubmit}>
          <div>
          <label for="name" htmlFor='name' >Name:</label>
           <input type='text' id='name' placeholder='Name'
           ref={userNameRef}
           />
          </div>

          <div>
          <label for="email" htmlFor='email' >Email:</label>
           <input type='email' id='email' placeholder='Email'
           ref={userEmailRef}
         />
          </div>

          <div>
          <label for="password" htmlFor='password'>Password:</label>
          <input type='password' id='password' placeholder='Password' 
           ref={userPasswordRef}
           />

          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
        </form>
  )
}

export default USEREF
