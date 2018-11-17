import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  export default class Cover extends Component {

  render() {
    return (
       <div className ='cover'>
        <Link to ='./Apps'>
        <div className= 'title sub link'>
           <h1> ROSS LUDEKE</h1>
           <h1> /</h1>
           <h1> WEB DEVELOPER</h1>
         </div>
       </Link>
    </div>
    )
  }
}
