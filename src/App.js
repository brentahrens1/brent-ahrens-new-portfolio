import React from 'react'
import './sass/_base.scss'

import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Index from './components/Index/Index'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/index" exact component={Index} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
}

export default App;
