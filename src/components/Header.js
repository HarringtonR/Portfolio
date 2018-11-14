import React, { Component } from 'react';

  export default class Header extends Component {
  render() {
    return (
       <div className ='head'>
         <h2> Ross Ludeke </h2>
           <nav>
             <ul>
             <li>Work</li>
             <li>Bio</li>
             <li>Contact</li>
             </ul>
           </nav>
       </div>
    )
  }
}
