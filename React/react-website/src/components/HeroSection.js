import React from 'react'
import '../App.css'
import Button from './Button'
import './HeroSection.css'
import Team from '../images/Original.png'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='team-img' src={Team} alt="" />
            <h1>Your Realtors in Ottawa</h1>
            <p>For us customer always comes first!</p>
            <div className="hero-btns">
                <Button
                    link='/contact-us'
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    CONTACT US
                </Button>
                <Button
                    link='/ottawa-living-guide'
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    OTTAWA LIVING GUIDE
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
