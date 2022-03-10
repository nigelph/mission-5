import React from 'react'
import style from './InformationTable.module.css'
import GreenCheck from '../../../../../../assets/images/green-check.png'
import RedCross from '../../../../../../assets/images/red-cross.png'

function InformationTable() {
    return (
        <div id={style['table-container']}>
            <table id={style['table-style']}>
                <tr id={style['insurance-extra-row']}>
                    <th></th>
                    <th> <div id={style['full-cover-logo']}><p>FULL COVER</p></div></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr id={style['table-headings']}>
                    <th></th>
                    <th>Comprehensive</th>
                    <th>Third Party Fire & Theft</th>
                    <th>Third Party Property damage</th>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Multi-policy discount</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Accidental loss or damage to your car</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={RedCross} /></td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Damage to someone else's vehicle or property</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Legal liability protection for damage and injury you cause up to $20 million</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Guarantee on most repairs by our approved repairer network</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Damage to your car caused by uninsured drivers</td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                    <td><img src={GreenCheck} /></td>
                </tr>
            </table>
        </div>
    )
}

export default InformationTable