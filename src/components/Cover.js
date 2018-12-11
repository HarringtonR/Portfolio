import React, { Component } from 'react';
import { Link } from 'react-router-dom';

  export default class Cover extends Component {

  render() {
    return (
       <div className ='cover' id='section1'>
        <a href='#section2'>
        <div className= 'title sub link'>
           <p> ross ludeke </p>
           <p> &ensp; / &ensp;</p>
           <p> full stack developer </p>
         </div>
       </a>
    </div>
    )
  }
}
