import React,{useState} from 'react'
import  Style1 from './form1.module.css'
const USEState2 = () => {
    const [user,SetUser]=useState({name:'',email:'',password:''})
    const {name,email,password}=user;

//   const  handlenameChange=(event)=>SetUser({
//     name:event.target.value,email,password
//   })
//   const  handleEmailChange=(event)=>SetUser({
//     name,email:event.target.value,password
//   })
//   const  handlePasswordChange=event=>SetUser({
//     name,email,password:event.target.value
//   })

  const HandleChange=e=>{
    const filedName=e.target.value;
    // if(filedName=='name'){
    //  SetUser({
    //      name:e.target.value,
    //      email,
    //      password
    //  })
 
    // }else if(filedName=='email'){
    //  SetUser({
    //      name,
    //      email:e.target.value,
    //      password
    //  })
    // }
    // else{
    //   SetUser({
    //      name,
    //      email,
    //      password:e.target.value
    //   })
    // }
  SetUser({...user,[e.target.name]:e.target.value})

  }

  const  handleSubmit=(event)=>{
   console.log(user);
   event.preventDefault();
   console.log('Form is Submitted');

  }

 

  return (
    <div>
      <h1>Registration-1</h1>
      <form action="" onSubmit={handleSubmit}>

        <div className={Style1.formGroup}>
        <label htmlFor="name" name="name">Name:</label>
        <input type='text' name='name' id='name' required
         onChange={HandleChange} 
          value={name}
         />
        </div>

      <div className={Style1.formGroup}>
      <label  htmlFor="email" name="email">Email:</label>
      <input type='email' name='email' id='email' required
       onChange={HandleChange} 
       value={email}
      />
      </div>

      <div className={Style1.formGroup}>
      <label htmlFor="password" name="password">Password:</label>
      <input type='password' name='password' id='password' required
       onChange={HandleChange} 
       value={password}
       />
      </div>
      <div>
       <input type="submit" value="Register" />
      </div>
     </form>
    </div>
  )
}

export default USEState2;

