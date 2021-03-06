import React from 'react'
import '../stylesheets/Eng.css'

const Eng = () => {
    return <div>
        <div className='lists eng-lists'>
            <div className='projects'>
                <h3>project links</h3>
                <ul className='list'>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/battle-chi' target="_blank"><h4 className='item-title btn'>2 player board game</h4></a>
                        <p><a href='https://fathomless-cove-56346.herokuapp.com/' target="_blank" className='btn'>Live App</a>, <a href='https://www.youtube.com/watch?v=2QhTyIyUOZg' target="_blank" className='btn'>Demo</a></p>
                        <p className='project-tech'>UI: React</p>
                        <p className='project-tech'>API: Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/search-newspapers' target="_blank"><h4 className='item-title btn'>iSearchNewspapers</h4></a>
                        <a href='https://www.youtube.com/watch?v=SFXISEKAEYI' target="_blank" className='btn'><p>Demo</p></a>
                        <p className='project-tech'>UI: React Native</p>
                        <p className='project-tech'>API: Rails</p>
                    </li>
                    <li className='list-item'>
                        <a href='https://github.com/mpottebaum/portfolio-2' target="_blank"><h4 className='item-title btn'>This site</h4></a>
                        <p>UI: React + CSS</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>tech</h3>
                <ul className='list'>
                    <li className='list-item'><a className='btn' href='https://medium.com/@3body.net/what-is-the-meaning-of-this-1d4f4cc62f40' target="_blank">JavaScript</a></li>
                    <li className='list-item'><a className='btn' href='https://github.com/mpottebaum/battle-chi-frontend/blob/f8dbef75155845ee908cfd3d3300b64fbe0b79c2/src/components/playerActions/Attack.js' target="_blank">React.js + Redux</a></li>
                    <li className='list-item'><a className='btn' href='https://medium.com/@3body.net/going-react-native-differences-between-mobile-and-web-development-in-react-451b22b21ae2' target="_blank">React Native</a></li>
                    <li className='list-item'><a className='btn' href='https://medium.com/@3body.net/coding-through-a-crisis-9bb3d2f2516b' target="_blank">Ruby on Rails</a></li>
                    <li className='list-item'><a className='btn' href='https://medium.com/@3body.net/building-mobile-optimized-layouts-with-css-html-1a736d779b1b' target="_blank">HTML5 + CSS3</a></li>
                    <li className='list-item'><a className='btn' href='https://medium.com/@3body.net/building-a-dev-server-with-express-and-webpack-761704f0c66a' target="_blank">Node.js</a></li>
                    <li className='list-item'><a className='btn' href='https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa' target="_blank">Webpack</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Eng