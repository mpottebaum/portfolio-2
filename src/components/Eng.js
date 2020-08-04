import React from 'react'
import '../stylesheets/Eng.css'

const Eng = () => {
    return <div>
        <div className='lists eng-lists'>
            <div className='projects'>
                <h3>projects</h3>
                <ul className='list'>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/battle-chi'><h4 className='item-title btn'>Battle For Chicago</h4></a>
                        <p>A strategic war board game.</p>
                        <p className='project-tech'>React, Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/search-newspapers'><h4 className='item-title btn'>SearchNewspapers</h4></a>
                        <p>iOS app for searching historic newspapers.</p>
                        <p className='project-tech'>React Native, Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/flatnote'><h4 className='item-title btn'>Flatnote</h4></a>
                        <p>Note-taking app.</p>
                        <p className='project-tech'>React, Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/trivia_app'><h4 className='item-title btn'>Trivia App</h4></a>
                        <p>Create, share and play trivia games.</p>
                        <p className='project-tech'>Rails</p>
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