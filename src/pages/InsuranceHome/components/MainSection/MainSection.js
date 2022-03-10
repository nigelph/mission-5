import React from 'react'
import style from './MainSection.module.css'
import image from '../../../../assets/images/image64.jpg'
import RightArrow from '../../../../assets/images/right-arrow.png'

function MainSection() {
    return (
        <div id={style['main-section-container']}>
            <img src={image} alt="driving" />
            <div id={style['main-section-content']}>
                <div id={style['content-box']}>
                    <div id={style['title-heading']}>
                        <h1>Car Insurance</h1>
                        <p>Protecting Kiwis for over 50 years</p>
                    </div>

                    <span id={style['button-area']}>
                        <button id={style['quote-button']}>Get a quote<img src={RightArrow} /></button>
                        <button id={style['retrieve-button']}>Retrieve a quote<img src={RightArrow} /></button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainSection