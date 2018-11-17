import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className ='head'>
       <div className='gitLink'>
         <a href='https://github.com/HarringtonR'><img src='https://imgur.com/IwXZ4If.png' alt='beets'/></a>
         <a href='https://www.linkedin.com/in/rossludeke/'><img src='https://imgur.com/NfjsRWC.png' alt='beets'/></a>
       </div>
           <nav>
             <ul>
               <Link to ='/' className='head link'><li>Home</li></Link>
               <Link to ='/Apps' className='head link'><li>Apps</li></Link>
               <Link to ='/Bio' className='head link'><li>Bio</li></Link>
             </ul>
           </nav>
       </div>
    )
  }
}
