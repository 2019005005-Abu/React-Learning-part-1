import React,{useState} from 'react';
import style2 from './faq.module.css'
import faqStyle from './faq1.module.css'


const FAQ1=({id,title,description})=>{
    const [toggle,setToggle]=useState(false);
    return(
     <article className={style2.container}>
        <section className={style2.faqs}>
        <div>
            
            <h4>{title}</h4>
             <button onClick={()=>{
                setToggle(!toggle)
             }}>{toggle==true?'-':'+'}</button>
         </div>
         {toggle && <p>{description}</p>}
        </section>
         
     </article>
    )
}
export default FAQ1;