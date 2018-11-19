  import React, { Component } from 'react';
  import Cover  from './Cover';
  import Apps from './Apps';
  import Bio from './Bio';
  import Header from './Header.js'
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  export default class Main extends Component {
  render() {
    return (
      <Router>
           <main className="container">
             <Header />
               <Switch>
                 <Route path ='/Apps' component={Apps} />
                 <Route path ='/Bio'  component={Bio} />
                 <Route path = '/' component={Cover} />
               </Switch>
           </main>
      </Router>
      )
  }
}
