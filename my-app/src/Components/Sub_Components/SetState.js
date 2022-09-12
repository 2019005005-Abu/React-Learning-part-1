import React,{Component} from 'react';
export default class Setstate extends Component{
    constructor(props){
        super(props);
        this.state={
           count:0,

        }
    }
      HandleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
      }

      HandleDecrement=()=>{
        this.setState({
            count:this.state.count-1
        })
      }
   render(){
    const {count}=this.state;
     return(
        <div>
            <p>Count:{count}</p>
            <button 
            onClick={this.HandleIncrement}
            disabled={count==100 ?true:false}>
            +(InCrement)</button><br/> <br/>
            <button onClick={this.HandleDecrement}
             disabled={count==0 ?true:false }>
                -(Decrement)</button>
        </div>
     )
   }
}