import React, { Component } from 'react';
// import { Collapse, Well } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <header>
          <ul>
           <a href='#section1'><li>home</li></a>
           <a href='#section2'><li>apps</li></a>
           <a href='#section3'><li>bio</li></a>
           <a href='https://github.com/HarringtonR'><li> git</li></a>
           <a href='https://www.linkedin.com/in/rossludeke/'><li>linkedin</li></a>
          </ul>
      </header>
    );
  }
}
