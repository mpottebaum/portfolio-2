import React from 'react'
import '../stylesheets/Mus.css'

const Mus = () => {
    return <div className='lists'>
        <h3>project links</h3>
        <ul className='list'>
            <li className='list-item'>
                <a href='https://elgrecoexplosive.bandcamp.com/' target="_blank"><h4 className='item-title btn'>El Greco Explosive</h4></a>
                <p>Psychedelic folk/country with vocal harmonies for days.</p>
            </li>
            <li className='list-item'>
                <a href='https://earlmanigault.bandcamp.com/' target="_blank"><h4 className='item-title btn'>man, A GOAT</h4></a>
                <p>Exploratory pop music project. Synth pop, electro folk and beyond.</p>
            </li>
            <li className='list-item'>
                <a href='https://universaltarantula.bandcamp.com/' target="_blank"><h4 className='item-title btn'>Universal Tarantula</h4></a>
                <p>Eight-legged electro noise daydreams.</p>
            </li>
        </ul>
    </div>
}

export default Mus