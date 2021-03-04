import React from 'react';
import './menu-item.style.scss'

export const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}
             style={{backgroundImage: `url("${imageUrl}")`,                         
                    backgroundPosition: `center`,
                    backgroundSize: `cover`}} >
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
