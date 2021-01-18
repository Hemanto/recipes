import React from 'react'
import Favourite from './Favourite'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/category'>
                <li>Category</li>
            </Link>
            <Link to='/Favourite'>
                Favourite
            </Link>
        </nav>
    )
}

export default Nav
