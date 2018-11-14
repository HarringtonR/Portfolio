  import React, { Component } from 'react';
  import Header from './Header';
  import Cover  from './Cover';
  export default class Main extends Component {
  render() {
    return (
         <main class="container">
           <Header />
           <Cover />

         </main>
      )
  }
}
