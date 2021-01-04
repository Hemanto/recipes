import React from 'react'
import Favourite from './Favourite'

const Nav = () => {
    return (
        <nav className='navbar'>
            <li>Home</li>
            <li>Category</li>
            <Favourite/>
        </nav>
    )
}

export default Nav
