  import React, { Component } from 'react';
  import Header from './Header';
  import Cover  from './Cover';
  import Apps from './Apps';
  import Contact from './Contact';
  import Bio from './Bio';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  export default class Main extends Component {
  render() {
    return (
      <Router>
           <main class="container">
             <Header />
               <Switch>
                 <Route path ='/Contact' component={Contact} />
                 <Route path ='/Apps' component={Apps} />
                 <Route path ='/Bio'  component={Bio} />
                 <Route path = '/' component={Cover} />
               </Switch>
           </main>
      </Router>
      )
  }
}
