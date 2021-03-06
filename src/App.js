import React, { Component } from 'react';
import './css/media.css';
import Cover from './components/Cover';
import Header from './components/Header';
import Apps from './components/Apps';
import Bio from './components/Bio';

class App extends Component {
  render() {

    // const API_KEY = process.env.REACT_APP_PORTFOLIO_API_KEY;
    // console.log(API_KEY)

    return (
         <div>
           <Header />
           <Cover />
           <Apps />
           <Bio />
        </div>
    );
  }
}

export default App;
