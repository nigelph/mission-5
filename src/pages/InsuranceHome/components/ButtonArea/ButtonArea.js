import React from 'react'
import style from './ButtonArea.module.css'
import BigButton from './components/BigButton/BigButton'
import MoneySign from '../../../../assets/images/money-sign.png'
import UserImage from '../../../../assets/images/user2.png'
import Checklist from '../../../../assets/images/checklist.png'
function ButtonArea() {
    return (
        <div id={style['button-area-container']}>
            <BigButton buttonImage={MoneySign} style={{ backgroundColor: 'green' }} buttonTitle='Pre-approved finance' />
            <BigButton buttonImage={UserImage} style={{ backgroundColor: '#0076BE' }} buttonTitle='Register account' />
            <BigButton buttonImage={Checklist} style={{ backgroundColor: 'black' }} buttonTitle='Get a quote' />
        </div>
    )
}

export default ButtonArea