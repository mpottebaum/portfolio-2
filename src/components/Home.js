import React from 'react'
import { Link } from 'react-scroll'
import '../stylesheets/Home.css'

const Home = ({ opt, setOpt }) => {
    return <div className='card home-card'>
            <Link to='abt' smooth={true} offset={0} duration={500}><h1 className='title btn'>Mike Pottebaum</h1></Link>
            <ul className='nav-list'>
                <li className='nav btn' onClick={() => setOpt('se')} style={opt === 'se' ? {color: '#11D0A9'} : {}}>software engineer</li>
                <li className='nav btn' onClick={() => setOpt('wri')} style={opt === 'wri' ? {color: '#11D0A9'} : {}}>writer</li>
                <li className='nav btn' onClick={() => setOpt('mus')} style={opt === 'mus' ? {color: '#11D0A9'} : {}}>musician</li>
            </ul>
        </div>
}

export default Home