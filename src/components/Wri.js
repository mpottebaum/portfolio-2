import React from 'react'
import '../stylesheets/Wri.css'

const Wri = () => {
    return <div className='lists'>
        <h3>published stories</h3>
        <ul className='list'>
            <li className='list-item'>
                <a href='https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa'><h4 className='item-title btn'>React without create-react-app</h4></a>
                <p>Configuring Webpack</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/swlh/how-to-use-react-hooks-d8486cfd8797'><h4 className='item-title btn'>Using React Hooks</h4></a>
                <p>useState and useEffect</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/weekly-webtips/how-to-make-clickable-dynamic-graphics-in-react-using-svg-22071f96623d'><h4 className='item-title btn'>SVG in React</h4></a>
                <p>Clickable/dynamic map</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a'><h4 className='item-title btn'>Deploying to Heroku with ActionCable</h4></a>
                <p>WebSockets in production</p>
            </li>
        </ul>
        <a href='https://medium.com/@3body.net'><h3 className='btn wri-all'>all stories</h3></a>
    </div>
}

export default Wri