import React from 'react'
import '../stylesheets/Eng.css'

const Eng = () => {
    return <div>
        <div className='eng-lists'>
            <div className='projects'>
                <h3>projects</h3>
                <ul className='eng-list'>
                    <li className='eng-item'>
                        <a href='https://github.com/mpottebaum/battle-chi'><h4 className='eng-item-title'>Battle For Chicago</h4></a>
                        <p>A strategic war board game made with React and Rails</p>
                    </li>
                    <li className='eng-item'>
                        <a href='https://github.com/mpottebaum/search-newspapers'><h4 className='eng-item-title'>SearchNewspapers</h4></a>
                        <p>iOS app for searching historic newspapers made with React Native and Rails</p>
                    </li>
                    <li className='eng-item'>
                        <a href='https://github.com/mpottebaum/flatnote'><h4 className='eng-item-title'>Flatnote</h4></a>
                        <p>Note-taking app made with React and Rails</p>
                    </li>
                    <li className='eng-item'>
                        <a href='https://github.com/mpottebaum/trivia_app'><h4 className='eng-item-title'>Trivia App</h4></a>
                        <p>Rails app for creating, sharing, and playing trivia games</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>tech</h3>
                <ul className='eng-list'>
                    <li className='eng-item'>JavaScript</li>
                    <li className='eng-item'>React + Redux</li>
                    <li className='eng-item'>Ruby on Rails</li>
                    <li className='eng-item'>HTML5 + CSS3</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Eng