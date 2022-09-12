import React,{useState} from 'react'
import style from './form.module.css'

const FormControl1 = () => {
  const  handlenameChange=(event)=>setName(event.target.value)
  const  handleEmailChange=(event)=>SetEmail(event.target.value)
  const  handlePasswordChange=event=>SetPassword(event.target.value)
  
  const  handleSubmit=(event)=>{
    event.preventDefault();
    const FormInfomation={
       name,
       email,
       password
    }
    console.log(FormInfomation)
  }
   const [name,setName]=useState('');
   const [email,SetEmail]=useState('');
   const [password,SetPassword]=useState('');
  return (
    <div>
      <h1>Registration-1</h1>
      <form action="" onSubmit={handleSubmit}>

        <div className={style.formGroup}>
        <label htmlFor="name" name="name">Name:</label>
        <input type='text' name='name' id='name' required
         onChange={handlenameChange}  value={name}
         />
        </div>

      <div className={style.formGroup}>
      <label  htmlFor="email" name="email">Email:</label>
      <input type='email' name='email' id='email' required
       onChange={handleEmailChange} value={email}
      />
      </div>

      <div className={style.formGroup}>
      <label htmlFor="password" name="password">Password:</label>
      <input type='password' name='password' id='password' required
       onChange={handlePasswordChange} value={password}
       />
      </div>
      <div>
       <input type="submit" value="Register" />
      </div>
     </form>
    </div>
  )
}

export default FormControl1
