import React from 'react'
import style from './InformationTable.module.css'

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
                    <td>tick</td>
                    <td>tick</td>
                    <td>tick</td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Accidental loss or damage to your car</td>
                    <td>tick</td>
                    <td>tick</td>
                    <td>cross</td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Damage to someone else's vehicle or property</td>
                    <td>tick</td>
                    <td>tick</td>
                    <td>tick</td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Legal liability protection for damage and injury you cause up to $20 million</td>
                    <td>tick</td>
                    <td>tick</td>
                    <td>tick</td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Guarantee on most repairs by our approved repairer network</td>
                    <td>tick</td>
                    <td>tick</td>
                    <td>tick</td>
                </tr>
                <tr id={style['table-benefits']}>
                    <td>Damage to your car caused by uninsured drivers</td>
                    <td>tick</td>
                    <td>tick</td>
                    <td>tick</td>
                </tr>
            </table>
        </div>
    )
}

export default InformationTable