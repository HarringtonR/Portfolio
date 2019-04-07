   import React, { Component } from 'react';

   export default class Apps extends Component {
     render() {
       return (
        <div className ='apps' id='section2'>
          <h2 className='apptitle'> apps</h2>
          <img src='https://imgur.com/JfGQgE9.png' alt ='arrow'/>
           <div className='container'>

             <a className='box' href='https://github.com/HarringtonR/NCnative' target="_blank" rel="noopener noreferrer">
               <div className='box images p7' />
               <div className='text'>
                 <h4> React-Native News and Chat</h4>
                 <p> News application making it easy for everyone to talk about the recent news in story specific chatrooms; React Native +   Firebase</p>
               </div>
             </a>

             <a className='box' href='http://nicholsonshardware.surge.sh/' target="_blank" rel="noopener noreferrer">
               <div className='box images p8' />
               <div className='text'>
                 <h4> Nicholson Hardware</h4>
                 <p> Freelance project converting dated website into modern React application</p>
               </div>
             </a>

             <a className='box' href='https://herokuchatrandom.herokuapp.com/' target="_blank" rel="noopener noreferrer">
               <div className='box images  p4' />
               <div className='text'>
                 <h4> ChatRoulette</h4>
                 <p> Rebuild of ChatRoulette in React using SimpleWebRTC with a timer on the conversation for an added feature.</p>
               </div>
             </a>

              <a className='box' href='https://chatapptestdeploy.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                <div className='box images p2' />
                <div className='text'>
                  <h4> News&Chat</h4>
                  <p>React application built to combine a google news api and pushers chatkit so people have a new way of discussing current events. </p>
                </div>
              </a>

              <a className='box' href='https://herokudeployfinsta.herokuapp.com/' target="_blank" rel="noopener noreferrer">
             <div className='box images p3' />
             <div className='text'>
                 <h4> Instagram React Build</h4>
                 <p> A team project in react, rebuilding as much of Instagram as we could in a few days. (Made to be viewed on mobile)</p>
               </div>
            </a>

            <a className='box' href='http://findtrackdays.surge.sh/' target="_blank" rel="noopener noreferrer">
             <div className='box images p1' />
             <div className='text'>
                 <h4> Find Track Days</h4>
                 <p> FindTrackDays is a react application being built as a simple go to resource for people to find tracks and events to go racing.</p>
               </div>
             </a>

             <a className='box' href='https://harringtonr.github.io/the_replicant/' target="_blank" rel="noopener noreferrer">
               <div className='box images  p5' />
                 <div className='text'>
                   <h4> The Replicant</h4>
                   <p> Chose your own story game. Built using JS, CSS, and HTML   </p>
               </div>
             </a>
             <a className='box' href='https://github.com/HarringtonR/react-native-weatherApp' target="_blank" rel="noopener noreferrer">
               <div className='box images p6' />
                 <div className='text'>
                   <h4> React-Native Weather App</h4>
                   <p> Simple react-native application giving both todays forcast and the 5 day.</p>
                 </div>
             </a>

           </div>
      </div>
       )
     }
   }
