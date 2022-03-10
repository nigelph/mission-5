import React from 'react'
import style from './InsuranceTable.module.css'
import GreenCheck from '../../../../../../assets/images/green-check.png'

function InsuranceTable() {
    return (
        <div id={style['table-container']}>
            <table id={style['table-style']}>
                <tr>
                    <th><img src={GreenCheck} /> Comprehensive cover for mechanical and electrical breakdown</th>
                </tr>
                <tr>
                    <th><img src={GreenCheck} /> Parts & labour</th>
                </tr>
                <tr>
                    <th><img src={GreenCheck} /> AA Roadservice & 24/7 breakdown assistance</th>
                </tr>
                <tr>
                    <th><img src={GreenCheck} /> Vehicle recovery and towing</th>
                </tr>
                <tr>
                    <th><img src={GreenCheck} /> Accommodation & rental car costs for out of town breakdowns</th>
                </tr>
                <tr>
                    <th><img src={GreenCheck} /> Generous claim limits that are set when you purchase your policy</th>
                </tr>
            </table>
        </div>
    )
}

export default InsuranceTable