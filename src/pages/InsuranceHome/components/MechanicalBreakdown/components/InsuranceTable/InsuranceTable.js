import React from 'react'
import style from './InsuranceTable.module.css'

function InsuranceTable() {
    return (
        <div>
            <table id={style['table-style']}>
                <tr>
                    <th>Comprehensive cover for mechanical and electrical breakdown</th>
                </tr>
                <tr>
                    <th>Parts & labour</th>
                </tr>
                <tr>
                    <th>AA Roadservice & 24/7 breakdown assistance</th>
                </tr>
                <tr>
                    <th>Vehicle recovery and towing</th>
                </tr>
                <tr>
                    <th>Accommodation & rental car costs for out of town breakdowns</th>
                </tr>
                <tr>
                    <th>Generous claim limits that are set when you purchase your policy</th>
                </tr>
            </table>
        </div>
    )
}

export default InsuranceTable