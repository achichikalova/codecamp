import React from 'react';
import './homepage.style.scss'
import { MenuItem } from './menu-item/menu-item.component';

export const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <MenuItem title='HATS' />
                <MenuItem title='HATS' />
                <MenuItem title='HATS' />
                <MenuItem title='HATS' />
                <MenuItem title='HATS' />
            </div>
        </div>
    )
}
