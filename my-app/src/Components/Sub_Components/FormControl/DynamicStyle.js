import React from 'react'

const DynamicStyle = () => {
    const error=false;
    const myName="Rifat";
  return (
    <div>
    <h1 style={{color:error?'red':'green'}}>
        This is MY DyNamic Styling</h1>
    <p style={{
    background:myName ?'blue':'yellow',
    color:myName ?'white':'black'
    }}>Abu Al Shahriar Rifat</p>
    </div>
  )
}

export default DynamicStyle

