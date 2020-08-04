import React from 'react'
import '../stylesheets/Home.css'

const Home = ({ opt, setOpt }) => {
    return <div className='card home-card'>
            <a href='#abt'><h1 className='title btn'>Mike Pottebaum</h1></a>
            <ul className='nav-list'>
                <li className='nav btn' onClick={() => setOpt('se')} style={opt === 'se' ? {color: '#11D0A9'} : {}}>software engineer</li>
                <li className='nav btn' onClick={() => setOpt('wri')} style={opt === 'wri' ? {color: '#11D0A9'} : {}}>writer</li>
                <li className='nav btn' onClick={() => setOpt('mus')} style={opt === 'mus' ? {color: '#11D0A9'} : {}}>musician</li>
            </ul>
        </div>
}

export default Home