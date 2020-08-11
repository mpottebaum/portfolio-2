import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            :
            <div className='exp-btn'>
              <Link to='abt' smooth={true} offset={0} duration={500}>
                <p className='btn exp-btn-txt'>My Experience</p>
                <img alt='Scroll Down For My Experience' src='/icons/down-arrow.png' className='exp-arrow btn' />
              </Link>
            </div>
          }
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
