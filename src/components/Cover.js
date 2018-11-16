import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  export default class Cover extends Component {
  render() {
    return (
       <div className ='cover'>
         <div className ='title'>
          <Link to ='/Apps' className='link sub'>Click to see my Work</Link>
         </div>
       </div>
    )
  }
}
