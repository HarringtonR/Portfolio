import React from 'react';
import '../css/contact.css'

  export default function Bio(){
    return (
       <div className ='contact'>
        <h2> Contact </h2>
        <div className='info'>
         <div className='list'>
           <ul>
             <li><a href='mailto:ross.ludeke@gmail.com' className='head link'>ross.ludeke@gmail.com</a></li>
           </ul>
         </div>
         </div>
         <h2>Skills</h2>
         <div className='skills'>
           <div className='skill js'>
           </div>
           <div className='skill react'>
           </div>
           <div className='skill native'>
           </div>
           <div className='skill node'>
           </div>
           <div className='skill express'>
           </div>
           <div className='skill sql'>
           </div>
           <div className='skill css'>
           </div>
            <div className='skill post'>
           </div>
           <div className='skill html'>
           </div>
         </div>

       </div>
    )
  }
