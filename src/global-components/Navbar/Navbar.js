import React from 'react'
import style from './Navbar.module.css'
import Arrow from '../../assets/images/arrow.png'
function Navbar() {
    return (
        <nav id={style['nav-container']}>
            <div id={style['nav-content']}>
                <ul id={style['nav-list-left']}>
                    <li>Find a Car<img src={Arrow} /></li>
                    <li>How to Buy<img src={Arrow} /></li>
                    <li>Sell your Car<img src={Arrow} /></li>
                    <li>Finance & Insurance<img src={Arrow} /></li>
                    <li>Careers<img src={Arrow} /></li>
                </ul>

                <ul id={style['nav-list-right']}>
                    <li>Auctions & Events<img src={Arrow} /></li>
                    <li>Services & Information<img src={Arrow} /></li>
                </ul >
            </div>
        </nav >
    )
}

export default Navbar