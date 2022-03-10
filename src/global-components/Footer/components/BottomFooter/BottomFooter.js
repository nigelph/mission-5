import React from 'react'
import style from './BottomFooter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFacebookf } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


function BottomFooter() {
    return (
        <div id={style['bottom-footer-container']}>
            {/* Copyright message section */}
            <div id={style['footer-content-container']}>

                <div id={style['footer-copyright']}>
                    © 2021 Turners
                </div>

                {/* Social media and other links */}
                <div id={style['footer-social-bar']}>
                    <a href="https://www.turners.co.nz/Company/Branches/"><FontAwesomeIcon icon={faHouseChimney} className={style['footer-icons']} /> Branch Details</a>
                    <a href="https://www.facebook.com/turnersNZ">Facebook</a>
                    <a href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/"><FontAwesomeIcon icon={faEnvelope} className={style['footer-icons']} /> Newsletter</a>
                    <a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/"><FontAwesomeIcon icon={faEnvelope} className={style['footer-icons']} /> Email Alerts</a>
                    <a href="https://www.instagram.com/turners_cars">Instagram</a>
                </div>
            </div>
        </div >
    )
}

export default BottomFooter