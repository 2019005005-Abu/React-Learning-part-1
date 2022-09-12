import React,{useState} from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState("");

  return (
    <div style={{
        margin:"1rem",
        background:"yellow",
        padding:"1rem"
    }}>
     <div>
        {toggle &&(
           <p>
           I am Abu Al  Shahriar rifat.I am woking as a software Enginner at Google .
           I have worked as senior software 
           Enginner at Microsoft,Meta and Booking.com, I Have 
           completed my BSC in Information tecnology from University
           of Sharda,India,Masters in Computer Science and Enginnerig
           University of Asia Pacific,And I have completed my Phd in
           Computer Science at University of California,USA
        </p>
        )}
   
     <button onClick={()=>{setToggle(!toggle)}}>{
        toggle ? "Hide":"Show"}</button>
     {/* <button onClick={()=>{setToggle(false)}}>Hide</button> */}
     </div>
      
    </div>
  )
}

export default Toggle
