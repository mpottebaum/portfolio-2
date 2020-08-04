import React, { useState } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Eng from './components/Eng'
import Wri from './components/Wri'
import Mus from './components/Mus'
import './App.css';

function App() {

  const [ opt, setOpt ] = useState('')

  const renderOpt = () => {
    switch(opt) {
      case 'se':
        return <Eng />
      case 'wri':
        return <Wri />
      case 'mus':
        return <Mus />
      default:
        return null
    }
  }

  return (
    <div>
      <div className='main'>
        <div className='home'>
          <Home opt={opt} setOpt={setOpt} />
          {
            opt ?
            <div className='card opt-card'>
              {renderOpt()}
            </div>
            : null
          }
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
