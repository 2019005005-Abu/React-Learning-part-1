import React,{Component} from 'react';
class USEState extends Component{
    constructor(props){
        super(props);
        this.state={
         count:0,
        }
        this.IncrementHandler.bind(this);
        this.DecrementHandler.bind(this);
    }
    IncrementHandler=()=>{
        this.setState({count:this.state.count+1})
    }
    DecrementHandler=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        const{count}=this.state;
        return(
            <div style={{background:"black",color:"white",width:"300px"}}>
                <h4>This is Using Class Function</h4>
                <p>Count:{count}</p>
                <button onClick={this.IncrementHandler}>+</button>
                <button onClick={this.DecrementHandler}>-</button>
            </div>
        )
    }
    
}
export default USEState;