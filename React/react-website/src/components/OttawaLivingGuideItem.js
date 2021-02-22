import React from 'react'
import { Link } from 'react-router-dom'

const OttawaLivingGuideItem = (props) => {
    return (
        <>
            <li className="guide__item">
                <Link className="guide__item__link" to={props.path}>
                    <figure className="guide__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image" className="guide__item__img" />
                    </figure>
                    <div className="guide__item__info">
                        <h5 className="guide__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default OttawaLivingGuideItem;
