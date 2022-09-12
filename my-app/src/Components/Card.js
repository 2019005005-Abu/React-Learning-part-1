import React from 'react';
import '../Components/Style/Style1.css';
 const Card=(propsValue)=>{
    const {titleText,descriptionIs}=propsValue;
    return(
        <div>
        <div className='card'>
            <div className='cardTitle'>{titleText}</div>
            <div className='carddescription'>
               <p>{descriptionIs}</p>
            </div>
            <div className='card-footer'>This is card-footer</div>
        </div>
        </div>
    )
}
export default Card;