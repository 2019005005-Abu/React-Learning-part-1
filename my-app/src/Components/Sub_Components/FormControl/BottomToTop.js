import React from 'react'

const BottomToTop = (props) => {
    const date=`I am from Child (BottonToTop)`
    props.onChildData(date)
  return (
    <div>
       
    </div>
  )
}

export default BottomToTop
