import React from 'react'
import '../stylesheets/Wri.css'

const Wri = () => {
    return <div className='lists'>
        <h3>published stories</h3>
        <ul className='list'>
            <li className='list-item'>
                <a href='https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa'><h4 className='item-title btn'>How to Create a React Development Build From Scratch</h4></a>
                <p>Configuring Webpack with Babel and ESLint.</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/swlh/how-to-use-react-hooks-d8486cfd8797'><h4 className='item-title btn'>How to Use React Hooks</h4></a>
                <p>Basics of hooks and custom hooks.</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/weekly-webtips/how-to-make-clickable-dynamic-graphics-in-react-using-svg-22071f96623d'><h4 className='item-title btn'>How To Make Clickable/Dynamic Graphics In React Using SVG</h4></a>
                <p>Building a clickable/dynamic map of Chicago.</p>
            </li>
            <li className='list-item'>
                <a href='https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a'><h4 className='item-title btn'>Deploying a Rails/React App with ActionCable to Heroku</h4></a>
                <p>Configuring a production environment for ActionCable (WebSockets).</p>
            </li>
        </ul>
        <a href='https://medium.com/@3body.net'><h3 className='btn'>all stories</h3></a>
    </div>
}

export default Wri