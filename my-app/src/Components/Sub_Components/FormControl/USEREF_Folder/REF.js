import React,{Component, createRef} from 'react'

class REF extends Component{
    constructor(props){
        super(props);
        this.userNameRef=createRef();
        this.userEmail=createRef();
        this.userPassword=createRef();
        this.state={}
    }
    HandleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form Has submiited Succesfully');
        console.log(this.userNameRef.current.value);
        console.log(this.userEmail.current.value);
        console.log(this.userPassword.current.value);
    }
    render(){
        const Styling={
          margin:"10px 20px"
        }
        return (
            <form action='' onSubmit={this.HandleSubmit}>
              <div>
              <label for="name" htmlFor='name' >Name:</label>
               <input type='text' id='name' placeholder='Name'
               style={Styling} ref={this.userNameRef}/>
              </div>

              <div>
              <label for="email" htmlFor='email' >Email:</label>
               <input type='email' id='email' placeholder='Email'
               ref={this.userEmail}/>
              </div>

              <div>
              <label for="password" htmlFor='password'>Password:</label>
              <input type='password' id='password' placeholder='Password' 
              ref={this.userPassword}/>
              </div>
              <div>
                <button type='submit'>Register</button>
              </div>
            </form>
          )
    }
 
}

export default REF
