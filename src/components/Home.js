import React from 'react'
import '../stylesheets/Home.css'

const Home = () => {
    return <div className='home'>
        <div className='home-card'>
            <h1 className='home-name'>Mike Pottebaum</h1>
            <ul className='nav-list'>
                <li className='nav'>software engineer</li>
                <li className='nav'>writer</li>
                <li className='nav'>musician</li>
            </ul>
        </div>
    </div>
}

export default Home