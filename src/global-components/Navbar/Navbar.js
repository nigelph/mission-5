import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav id={style['nav-container']}>
            <ul id={style['nav-list']}>

                <li>Find a Car</li>
                <li>How to Buy</li>
                <li>Sell your Car</li>
                <li>Finance & Insurance</li>
                <li>Careers</li>
                <li>Auctions & Events</li>
                <li>Services & Information</li>



            </ul>
        </nav>
    )
}

export default Navbar