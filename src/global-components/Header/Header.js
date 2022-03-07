import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/images/image60.jpg'

function Header() {
    return (
        // TODO: Create header container
        <div id={style['header-container']}>

            {/* TODO: Create inner container */}
            {/* TODO: INSERT turners logo */}
            <div id={style['header-content-container']}>
                <div>
                    <img src={logo} />

                </div>
                {/* TODO: Right side Details  */}
                <div id={style['header-extra-details']}>
                    <p><a href=''>Login </a>OR<a href=''> Register </a></p>

                    <p>0800 887 637</p>
                    <p>Find Us</p>

                </div>
            </div>

        </div>

    )
}

export default Header