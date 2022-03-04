import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav id={style['nav-container']}>
            <ul id={style['nav-list']}>

                <li>One</li>
                <li>two</li>
                <li>three</li>

            </ul>
        </nav>
    )
}

export default Navbar