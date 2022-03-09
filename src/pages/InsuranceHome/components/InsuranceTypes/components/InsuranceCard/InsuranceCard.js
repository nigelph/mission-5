import React from 'react'
import style from './InsuranceCard.module.css'
import arrow from '../../../../../../assets/images/arrow.png'

function InsuranceCard(props) {
    return (
        <div className={style['card-container']}>
            <div className={style['card-header']}>
                <div className={style['image-circle']}>
                    <img src={props.cardImage} id={style['test']}></img>
                </div>

            </div>
            <div className={style['card-body']}>
                <div className={style['card-body-text']}>
                    <h3>{props.cardName}</h3>
                    <p className={style['body-description']}>
                        {props.description}
                    </p>
                </div>
                <div className={style['card-button-area']}>
                    <button className={style['find-more-button']}>Find out more <img src={arrow}></img></button>
                </div>
            </div>
        </div>
    )
}

export default InsuranceCard