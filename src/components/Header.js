import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  export default class Header extends Component {
  render() {
    return (
       <div className ='head'>
         <h4> Ross Ludeke </h4>
           <nav>
             <ul>
             <Link to ='/'><li>Home</li></Link>
             <Link to ='/Apps'><li>Apps</li></Link>
             <Link to ='/Bio'><li>Bio</li></Link>
             <Link to ='/Contact'><li>Contact</li></Link>
             </ul>
           </nav>
       </div>
    )
  }
}
