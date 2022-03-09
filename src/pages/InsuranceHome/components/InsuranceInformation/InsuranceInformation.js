import React from 'react'
import style from './InsuranceInformation.module.css'
import InformationTable from './components/InformationTable/InformationTable'
import QuoteButton from './components/QuoteButton/QuoteButton'
import BlueArrow from '../../../../assets/images/blue-arrow.png'

function InsuranceInformation() {
    return (
        <div id={style['insurance-information-container']}>
            <div id={style['insurance-information-headings']}>
                <h1>Car Insurance. It’s quick, easy and affordable.</h1>
                <h4>Three options to fit your budget and needs:</h4>
            </div>
            <div id={style['insurance-table-container']}>
                <InformationTable />
                <div id={style['expand-content-container']}>
                    <button id={style['show-expand-button']}>Show all items<img src={BlueArrow} id={style['arrow-style']} /></button>
                </div>
            </div>
            <div id={style['quote-button-container']}>
                <QuoteButton />
                <p>only takes 5 minutes</p>
            </div>
        </div>
    )
}

export default InsuranceInformation