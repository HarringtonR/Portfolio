import React, { Component } from 'react';
import './App.css';
import './css/media.css';
import Cover from './components/Cover';
import Header from './components/Header';
import Apps from './components/Apps';
import Bio from './components/Bio';

class App extends Component {
  render() {
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
