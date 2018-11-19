   import React, { Component } from 'react';

   export default class Apps extends Component {
     render() {
       return (
        <div className ='apps'>
          <h2 className='apptitle'> Applications</h2>
            <div className ='row'>
               <div className = 'boxImage'>
                </div>
              <div className='box'>
                <h4> Instagram Recreation</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolore reprehenderit eos fugit quasi, inventore! Totam sapiente fuga dolorem laboriosam ducimus excepturi</p>
              </div>
            </div>
            <div className ='row'>
              <div className='box'>
                 <h4> News + Chat </h4>
                 <p>Lorem ipsum dolor sit amet, consectetur .</p>
               </div>
                  <div className = 'boxImage2'>
                </div>
          </div>
          <div className ='row'>
                  <div className = 'boxImage3'>
                </div>
              <div className='box'>
                <h4> The Replicant </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolore reprehenderit eos fugit quasi, inventore.</p>
              </div>
            </div>
      </div>
       )
     }
   }
