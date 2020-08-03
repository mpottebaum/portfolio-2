import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div>
      <div className='main'>
        <Router>
          <Route exact path='/' component={Home} />
        </Router>
      </div>
      <About />
    </div>
  );
}

export default App;
