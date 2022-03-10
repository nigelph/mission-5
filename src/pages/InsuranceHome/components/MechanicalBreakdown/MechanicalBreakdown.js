import React from 'react'
import style from './MechanicalBreakdown.module.css'
import InsuranceTable from './components/InsuranceTable/InsuranceTable'
import BreakdownImage from '../../../../assets/images/image65.jpg'
function MechanicalBreakdown() {
    return (
        <div id={style['breakdown-section-container']}>
            {/* left side */}
            <div id={style['cover-container']}>
                <div id={style['cover-headings']}>
                    <h1>Mechanical Breakdown Insurance</h1>
                    <h4>Protect yourself against unexpected costs. Cover includes:</h4>
                </div>
                <InsuranceTable />
            </div>

            {/* right side */}
            <div id={style['misc-container']}>
                <div id={style['image-container']}>
                    <img src={BreakdownImage} id={style['image-size']} />
                </div>
                <div id={style['misc-button-group']}>
                    <button id={style['faq-button']}>Mechanical Breakdown FAQS</button>
                    <button id={style['policy-button']}>Policy Document</button>
                </div>
            </div>
        </div >
    )
}

export default MechanicalBreakdown