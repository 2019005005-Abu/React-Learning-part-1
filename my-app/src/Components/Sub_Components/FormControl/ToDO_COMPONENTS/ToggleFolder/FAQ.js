import React,{useState} from 'react'
import FAQ1 from './FAQ1';
import {faqData as data } from './FAQData';

const FAQ = () => {
  const [faqs,setfaqs]=useState(data);
  return (
    <article>
        <div>
            {
             faqs.map((faq)=>{
                return(
                    <FAQ1 
                    key={faq.id}
                    {...faq}
                    />
                )
             })
            }
        </div>
    </article>
  )
}

export default FAQ;