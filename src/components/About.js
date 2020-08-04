import React, { useState } from 'react'
import Experience from './Experience'
import '../stylesheets/About.css'

const About = () => {

    const [ exp, setExp ] = useState('cyb')

    const renderSmExp = type => {
        return <div className='exp-copy sm'>
            {
                exp === type ?
                <Experience type={exp} />
                :
                null
            }
        </div>
    }

    return <div id='abt' className='abt'>
        <div className='socials'>
            <a className='social-link' href='https://github.com/mpottebaum'><img src='/logos/Github.png' className='social' /></a>
            <a className='social-link' href='https://www.linkedin.com/in/mike-pottebaum/'><img src='/logos/linkedin.png' className='social' /></a>
        </div>
        <div className='card abt-card'>
            <h1 class='title exp-title'>Experience</h1>
            <div className='exp'>
                <div className='exp-menu'>
                    <p className='nav btn' onClick={() => setExp('cyb')} style={exp === 'cyb' ? {color: '#11D0A9'} : {}}>cybersecurity</p>
                    {renderSmExp('cyb')}
                    <p className='nav btn' onClick={() => setExp('mus')} style={exp === 'mus' ? {color: '#11D0A9'} : {}}>music</p>
                    {renderSmExp('mus')}
                    <p className='nav btn' onClick={() => setExp('adm')} style={exp === 'adm' ? {color: '#11D0A9'} : {}}>admin assistant</p>
                    {renderSmExp('adm')}
                    <p className='nav btn' onClick={() => setExp('pay')} style={exp === 'pay' ? {color: '#11D0A9'} : {}}>payroll</p>
                    {renderSmExp('pay')}
                    <p className='nav btn' onClick={() => setExp('shi')} style={exp === 'shi' ? {color: '#11D0A9'} : {}}>shipping/warehouse</p>
                    {renderSmExp('shi')}
                </div>
                <div className='exp-copy lg'>
                    <Experience type={exp} />
                </div>
            </div>
        </div>
    </div>
}

export default About