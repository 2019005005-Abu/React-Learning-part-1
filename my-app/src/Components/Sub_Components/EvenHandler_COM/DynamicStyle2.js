import React,{useState,useEffect} from 'react'
import '../../Style/Style1.css'
const DynamicStyle2 = () => {
    const[name,setName]=useState('');
    const [validInput,setValidInput]=useState(false);

    useEffect(()=>{
        if(name.length<2){
            setValidInput(false)
        }else{
            setValidInput(true);
        }
    },[name])
    const handleChange=(event)=>{
        setName(event.target.value);
        console.log(event.target.value)
        console.log(name);
       
    }

  return (
    <div>
       <input type='text' 
       value={name} 
       onChange={handleChange}
    //    className={`${validInput ? "valid":"unvalid"}`}
    // short-circuit
        className={`${validInput && "valid"}`}
       />
    </div>
  )
}

export default DynamicStyle2
