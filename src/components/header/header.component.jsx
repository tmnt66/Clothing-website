import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'
import {auth } from '../firebase/firebase-utils'
import { connect } from 'react-redux';
const Header = ({currentUser}) => (
    <div className='header'>
        
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>

        {/* <div className='options'> */}
            <Link className='option' to='/shop'>CONTACT</Link>
        {/* </div> */}
{
    currentUser ?
    <div className='option' onClick={()=> auth.signOut()}>
        SIGN OUT
    </div>
    :
    <Link className='option' to='/signin'>SIGN IN</Link>
}
        {/* <div className='options'> */}
           
        {/* </div> */}

        </div>
    </div>
)
const mapStateProps = (state)=>({currentUser:state.user.currentUser})

export default connect(mapStateProps)(Header)
