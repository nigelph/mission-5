import React from 'react'
import style from './Footer.module.css'
import UpperFooter from './components/UpperFooter/UpperFooter'
import BottomFooter from './components/BottomFooter/BottomFooter'

function Footer() {
    return (
        <footer id={style['footer-container']}>
            <UpperFooter />
            <BottomFooter />
        </footer>
    )
}

export default Footer