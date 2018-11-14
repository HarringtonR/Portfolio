import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  export default class Cover extends Component {
  render() {
    return (
       <div className ='cover'>
         <div className ='title'>
           <h1> Hi, I'm Ross and I enjoy making apps that connect people </h1>
          <Link to ='/Apps'>Click to see my Applications</Link>
         </div>
       </div>
    )
  }
}
