import React from 'react'
import Button from '../Button'
import '../../App.css'
import Alvina from '../../images/alvina.png'
import Dan from '../../images/dan.png'
import '../OurTeam.css'

export default function OurTeam() {
    return (
        <div className='our-team'>
            <h1>Meet Our Team</h1>
            <div className="container-team">
                <div className="team-member">
                    <img className="member-image" src={Alvina} />
                    <div className="member-quote">
                        <div className="member-name">Alvina Usher</div>
                        <p>"During this recent economic downturn, Buyers are at a Premium while Sellers coming out of wood work are often owing more then their home is actually worth. The inventory has skyrocketed, leading to falling prices and fantastic opportunities for Buyers , both in terms of price and choice selection."</p>
                    </div>
                </div>
                <div className="team-member">
                    <img className="member-image" src={Dan} />
                    <div className="member-quote">
                        <div className="member-name">Dan Moscato</div>
                        <p>"Real estate investing, even on a very small scale, remains a tried and true means of building an individual's cash flow and wealth. One thing I tell everyone is learn about real estate. Real estate provides the highest returns, the greatest values and the least risk. Want to know more? Call me today I will be happy to meet with you and talk about real estate investments!"</p>
                    </div>
                </div>
            </div>
            <div className="team-btns">
                <Button
                    link='/contact-us'
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    CONTACT US
                </Button>
                <Button
                    link='/testimonials'
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    CHECK OUR CLIENT'S TESTIMONIALS
                </Button>
            </div>
        </div>
    )
}