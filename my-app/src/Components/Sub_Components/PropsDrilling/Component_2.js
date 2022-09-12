import React from 'react'
import Component_3 from './Component_3'

const Component_2 = ({user}) => {
  return (
    <div>
       <p>Component-2</p>
       <Component_3 user={user}/>
    </div>
  )
}

export default Component_2
