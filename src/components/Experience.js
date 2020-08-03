import React from 'react'
import { experience } from '../content/experience'

const Experience = ({ type }) => {

    const renderDesc = () => {
        return experience[type].desc.map(content => {
            return <li>{content}</li>
        })
    }

    return <div className='exp-comp'>
        <p>{experience[type].title}</p>
        <p>{experience[type].company}</p>
        <ul>
            {renderDesc()}
        </ul>
    </div>
}

export default Experience