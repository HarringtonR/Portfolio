import React from 'react';
import '../css/bio.css'

  export default function Bio(){
    return (
       <div className ='bio' id='section3'>
         <h2>bio</h2>
           <img className ='arrow' src='https://imgur.com/JfGQgE9.png' alt ='arrow'/>
           <div className='personal'>
             <img src='https://imgur.com/SUJ6qRC.jpg' alt='me' />
          <p className='info'>Software Engineer and former US Navy Rescue Swimmer with a background in web development, business management, and high-risk training. Now building applications in React and React Native while genuinely seeking to work and live creatively pushing the scope of my experiences and hand on heart say I love what I do.</p>
           </div>
           <h4>skills</h4>
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
         </div>
       </div>
    )
  }
