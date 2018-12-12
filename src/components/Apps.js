   import React, { Component } from 'react';

   export default class Apps extends Component {
     render() {
       return (
        <div className ='apps' id='section2'>
          <h2 className='apptitle'> apps</h2>
          <img src='https://imgur.com/JfGQgE9.png' alt ='arrow'/>
           <div className='container'>
             <div className='box'>
              <div className='images p1'>
               </div>
               <div className='text'>
                 <h4> www.findtrackdays.com</h4>
                 <p> FindTrackDays is a react application being built as a simple go to resource for people to find tracks and events to go racing.</p>
               </div>
             </div>
             <div className='box'>
               <div className='images p2'>
               </div>
               <div className='text'>
                 <h4> News&Chat</h4>
                 <p>React application built to combine a google news api and pushers chatkit so people have a new way of discussing current events. </p>
               </div>
             </div>
             <div className='box'>
              <div className='images  p3'>
               </div>
               <div className='text'>
                 <h4> Instagram Remake</h4>
                 <p> A team project rebuilting as much of Instagram as we could in a few days.</p>
               </div>
             </div>
             <div className='box'>
              <div className='images  p4'>
               </div>
               <div className='text'>
                 <h4> ChatRoulette</h4>
                 <p> I rebuilt ChatRoulette in React using SimpleWebRTC with a timer on the conversation for an added feature.</p>
               </div>
             </div>
             <div className='box'>
              <div className='images  p5'>
               </div>
               <div className='text'>
                 <h4> The Replicant</h4>
                 <p> Chose your own story game built using JS  </p>
               </div>
             </div>
             <div className='box'>
              <div className='images p6'>
               </div>
               <div className='text'>
                 <h4> React-Native Weather App</h4>
                 <p> Simple react-native application giving both todays forcast and the 5 day.</p>
               </div>
             </div>
           </div>
      </div>
       )
     }
   }
