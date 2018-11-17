import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Dropdown extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <header>
       <div className='click'>
          <img onClick={() => this.setState({ open: !this.state.open })} src ='https://imgur.com/wueOqdC.jpg' alt='hamburger'/>
        <Collapse in={this.state.open}>
          <div>
            <Well className='drop'>
                   <Link to ='/' className='head link'><li>Home</li></Link>
                   <Link to ='/Apps' className='head link'><li>Apps</li></Link>
                   <Link to ='/Bio' className='head link'><li>Bio</li></Link>
            </Well>
          </div>
        </Collapse>
        </div>
       <div className ='head'>
         <div className='gitLink'>
           <a href='https://github.com/HarringtonR'><img src='https://imgur.com/IwXZ4If.png' alt='beets'/></a>
           <a href='https://www.linkedin.com/in/rossludeke/'><img src='https://imgur.com/NfjsRWC.png' alt='beets'/></a>
         </div>
     </div>

      </header>
    );
  }
}
