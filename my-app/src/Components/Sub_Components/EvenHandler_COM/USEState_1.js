import React,{useState} from 'react';
function USEState_1(){
    const [count, setCount] = useState(0);
    const handleInement=()=>setCount(count+1);
    const handleDecrement=()=>setCount(count-1);
    const buttonStyle={
        margin:"10px",
        padding:"20px",
        background:"yellow"
    }
    const buttonStyle1={
        marginTop:"5px",
        margin:"10px",
        padding:"20px",
        background:"yellow"
    }
    return( 
        <div style={{background:"red",color:"black",width:"300px"}}>
            <p>Using hooks UseSate</p>
             <h1>Count:{count}</h1>
            <button onClick={handleInement} style={buttonStyle}>+</button>
            <button onClick={handleDecrement} style={buttonStyle1}>-</button>
        </div>
    )
}
export default USEState_1;