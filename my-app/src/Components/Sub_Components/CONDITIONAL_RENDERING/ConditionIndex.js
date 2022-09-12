import React,{Component} from 'react';
import Conditional_Render from './Conditional_Render';
import Conditional_Ren1 from './Conditional_Ren1.js';
 class ConditionalIndex extends Component{
    constructor(props){
        super(props)
        this.state = {
           isLogging:false
        }
    }

render(){
     const {isLogging}= this.state;
      return(
          <div>
         
            {
             isLogging && <Conditional_Render/>
            }
          </div> 
        
      )
    }
    
}
export default ConditionalIndex;