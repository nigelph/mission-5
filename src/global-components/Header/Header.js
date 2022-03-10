import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/images/image60.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons'


function Header() {
    return (
        <div id={style['header-container']}>
            {/* Turners logo */}
            <div id={style['header-content-container']}>
                <img src={logo} />
                {/* Right side Links  */}
                <div id={style['header-extra-details']}>
                    <span id={style['account-links']}>
                        <a href='https://google.com'><FontAwesomeIcon icon={faUser} className={style['grey-icon']} /> LOGIN </a>
                        <span>OR</span>
                        <a href=''> REGISTER </a>
                    </span>
                    <span id={style['turners-phone']}>
                        <a href='#'><FontAwesomeIcon icon={faPhone} className={style['grey-icon']} /> 0800 887 637</a>
                    </span>
                    <span id={style['turners-find-us']}>

                        <a href='/'><FontAwesomeIcon icon={faLocationDot} className={style['grey-icon']} /> Find Us</a>
                    </span>
                    <span id={style['chinese-link']}>
                        <a href='https://www.turners.co.nz/Cars/Special-Events-Cars/chinese-speaking-contacts/'>中文</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header