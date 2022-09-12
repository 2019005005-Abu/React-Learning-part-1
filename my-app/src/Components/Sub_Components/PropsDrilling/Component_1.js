import React,{useState} from 'react'
import USECONTEXT from '../FormControl/ToDO_COMPONENTS/ToggleFolder/USECONTEXT'
import Component_2 from './Component_2'
import { UserContext } from './USERCONTEXT1'
const Component_1 = () => {
    const [user,setUser]=useState({id:101,name:"Abu Al Shahriar Rifat"})
  return (
    <USECONTEXT.Provider value={{user}}>
      <Component_2/>
    </USECONTEXT.Provider>
  )
}

export default Component_1
