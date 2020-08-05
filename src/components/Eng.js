import React from 'react'
import '../stylesheets/Eng.css'

const Eng = () => {
    return <div>
        <div className='lists eng-lists'>
            <div className='projects'>
                <h3>projects</h3>
                <ul className='list'>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/battle-chi'><h4 className='item-title btn'>2 player board game</h4></a>
                        <p>UI: React</p>
                        <p className='project-tech'>API: Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/search-newspapers'><h4 className='item-title btn'>iSearchNewspapers</h4></a>
                        <p>UI: React Native</p>
                        <p className='project-tech'>API: Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/portfolio-2'><h4 className='item-title btn'>This site</h4></a>
                        <p>UI: React + CSS</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>tech</h3>
                <ul className='list'>
                    <li className='list-item'>JavaScript</li>
                    <li className='list-item'>React + Redux</li>
                    <li className='list-item'>Ruby on Rails</li>
                    <li className='list-item'>HTML5 + CSS3</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Eng