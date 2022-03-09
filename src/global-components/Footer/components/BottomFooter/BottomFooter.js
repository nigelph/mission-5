import React from 'react'
import style from './BottomFooter.module.css'
function BottomFooter() {
    return (
        <div id={style['bottom-footer-container']}>
            {/* Copyright message section */}
            <div id={style['footer-content-container']}>

                <span id={style['footer-copyright']}>
                    © 2021 Turners
                </span>

                <span id={style['footer-social-bar']}>
                    <table id={style['footer-social-table']}>
                        <tr>
                            <td><a href="https://www.turners.co.nz/Company/Branches/">Branch Details</a></td>
                            <td><a href="https://www.facebook.com/turnersNZ">Facebook</a></td>
                            <td><a href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/">Newsletter</a></td>
                            <td><a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/">Email Alerts</a></td>
                            <td><a href="https://www.instagram.com/turners_cars">Instagram</a></td>
                        </tr>
                    </table>
                </span>
            </div>
            {/* Social media and other links */}
        </div >
    )
}

export default BottomFooter