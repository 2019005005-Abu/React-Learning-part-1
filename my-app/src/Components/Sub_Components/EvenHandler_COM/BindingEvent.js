import React,{Component} from 'react'
 export default class BindingEvent extends Component{
   constructor(props){
    super(props);
    this.state={
        count:0
    }
    this.incrementing.bind(this);
    this.Decrementing.bind(this);
   }
   
   incrementing=()=>{
     this.setState({
        count:this.state.count+1
     })
   }

   Decrementing=()=>{
    this.setState({
        count:this.state.count-1
    })
   }
    render(){
        const {count}=this.state
        return(
            
            <div>
             <h1>Count:{count}</h1>
              <button 
              onClick={this.incrementing}
              disabled={count==100 ?true:false}>
                Increase</button>
                <button onClick={this.Decrementing} 
                disabled={count==0?true:false}>
                    Deceremnt
                </button>
            </div>
        )
    }
}