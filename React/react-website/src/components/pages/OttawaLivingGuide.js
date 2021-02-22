import React from 'react'
import OttawaLivingGuideItem from '../OttawaLivingGuideItem'
import '../OttawaLivingGuideItem.css'
import Kanata from '../../images/kanata.jpg'
import Stittsville from '../../images/stittsville.jpg'
import Barrhaven from '../../images/barrhaven.jpg'
import Nepean from '../../images/nepean.jpg'
import Orleans from '../../images/orleans.jpg'
import OttawaCentral from '../../images/ottawa_central.jpg'
import { Button } from '../Button'

const OttawaLivingGuide = () => {
    return (
        <div>
            <div className='guide'>
                <h1>Relocating to Ottawa? Here is the guide filled with everything you need to know!</h1>
                <div className="guide__container">
                    <div className="guide__wrapper">
                        <ul className="guide__items">
                            <OttawaLivingGuideItem
                                src={Kanata}
                                text='Kanata is one of the largest suburbs of Ottawa, Ontario, Canada.'
                                label='Kanata'
                                path='/'
                            />
                            <OttawaLivingGuideItem
                                src={Stittsville}
                                text='Stittsville is a suburban community, part of the City of Ottawa, Ontario, Canada.'
                                label='Stittsville'
                                path='/'
                            />
                            <OttawaLivingGuideItem
                                src={OttawaCentral}
                                text='The heart of Ottawa - Downtown, Byward Market and University culture.'
                                label='Ottawa Central'
                                path='/'
                            />
                        </ul>
                        <ul className='guide__items'>
                            <OttawaLivingGuideItem
                                src={Barrhaven}
                                text='Barrhaven is a rapidly growing suburban neighbourhood in the southwest of the city of Ottawa, Ontario.'
                                label='Barrhaven'
                                path='/'
                            />
                            <OttawaLivingGuideItem
                                src={Nepean}
                                text='Nepean is just slightly west of the centre of Ottawa.'
                                label='Nepean'
                                path='/'
                            />
                            <OttawaLivingGuideItem
                                src={Orleans}
                                text='Orléans, is a suburb of Ottawa, Ontario, Canada.'
                                label='Orleans'
                                path='/'
                            />
                        </ul>
                        <Button
                            link='/ottawa-living-guide'
                            className='btns'
                            buttonStyle='btn--outline--black'
                            buttonSize='btn--large'>
                            Show more...
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OttawaLivingGuide
