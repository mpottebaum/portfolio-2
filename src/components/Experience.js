import React from 'react'
import { experience } from '../content/experience'

const Experience = ({ type }) => {

    const renderDesc = () => {
        return experience[type].desc.map((content, i) => {
            return <li key={i} className='list-item'>{content}</li>
        })
    }

    return <div className='exp-comp'>
        <p className='list-item'>{experience[type].title}</p>
        {
            experience[type].company ?
            <p className='list-item'>{experience[type].company}</p>
            :
            null
        }
        <p className='list-item'>{experience[type].dates}</p>
        <ul className='exp-list'>
            {renderDesc()}
        </ul>
    </div>
}

export default Experience