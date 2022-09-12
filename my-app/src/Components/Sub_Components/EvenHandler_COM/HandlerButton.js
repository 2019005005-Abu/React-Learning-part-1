import React,{Component} from 'react';
class  HandlerButton extends Component{
  handleChange=(event)=>{
    this.setState({
      changeValue:event.target.value

    },()=>{
      console.log(this.state.changeValue)
    })
  }

  
  handleInput=()=>{
    console.log('The Button has Clicked');
  
  }
 constructor(props){
  super(props);
  this.state={
    changeValue:'',
  }
 }
  render(){
    return(
      <div>
         <h1>This is Button Handler</h1> 
        <input type='text' placeholder='Enter text' 
        onChange={this.handleChange}/>
        <p>{this.state.changeValue}</p>
        <button onClick={this.handleInput}>Click</button>
      </div>
    )
  }
 
}
export default HandlerButton;