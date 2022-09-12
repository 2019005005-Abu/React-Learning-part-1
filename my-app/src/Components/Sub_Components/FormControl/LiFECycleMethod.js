import React, { Component } from 'react'

class LiFECycleMethod  extends Component{
    constructor(props){
        console.log('constructor')
        super(props);
        this.state={
          count:0
        }
    }

    // shouldComponentUpdate=()=>console.log('Component should be updated')
    componentDidMount=()=>console.log('Constructor->Render->Component DidMount'); 
    componentDidUpdate=()=>console.log('CompoenntDid-Update is Upadating')
    incrementing=()=>{this.setState({count:this.state.count+1});
    
    }
   
    render(){
        {console.log('render')}
        return(
            <div>
            This is  Life Cycle Method
            <h1>Count:{this.state.count}</h1>
             <button onClick={this.incrementing}>Increment</button>
            </div>
        )
    }
}

export default LiFECycleMethod
