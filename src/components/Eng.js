import React from 'react'
import '../stylesheets/Eng.css'

const Eng = () => {
    return <div>
        <div className='eng-lists'>
            <div className='projects'>
                <h3>projects</h3>
                <ul>
                    <li>
                        <h4>Battle For Chicago</h4>
                        <p>A strategic war board game made with React and Rails</p>
                    </li>
                    <li>
                        <h4>SearchNewspapers</h4>
                        <p>iOS app for searching historic newspapers made with React Native and Rails</p>
                    </li>
                    <li>
                        <h4>Flatnote</h4>
                        <p>Note-taking app made with React and Rails</p>
                    </li>
                    <li>
                        <h4>Trivia App</h4>
                        <p>Rails app for creating, sharing, and playing trivia games</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>tech</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React, Redux</li>
                    <li>Ruby on Rails</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Eng