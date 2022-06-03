import React from 'react';
import './menu-items.styles.scss'
// import {withRouter} from 'react-router-dom'
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menuitems`}>
        <div className='backgroundImage' style={ { backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>{title}
            </h1>
            <span className='shopnow'>Shop Now</span>
        </div> 
    </div>
)
export default MenuItem;
// export default withRouter(MenuItem);