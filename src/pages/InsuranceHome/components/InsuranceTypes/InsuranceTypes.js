import React from 'react'
import style from './InsuranceTypes.module.css'
import InsuranceCard from './components/InsuranceCard/InsuranceCard'
import car from '../../../../assets/images/car.png'
import wrench from '../../../../assets/images/wrench.png'

function InsuranceTypes() {
    return (
        <div id={style['insurance-section-container']}>
            <div id={style['insurance-title']}>
                <h1>There are two main types of motor vehicle insurance:</h1>
            </div>
            <div id={style['insurance-body']}>
                <InsuranceCard
                    cardImage={wrench}
                    cardName='Mechanical Breakdown Insurance'
                    description='Mechanical Breakdown Insurance covers the cost of repairing your car
            if you have mechanical or electrical failure. If you are getting
            Finance, your Mechanical Breakdown Insurance can be included in your loan.
            You can get Mechanical Breakdown Insurance for any vehicle, even if you
            didn’t buy it at Turners.'
                />
                <InsuranceCard
                    cardImage={car}
                    cardName='Car Insurance'
                    description='We’ve got you covered from comprehensive, third party fire & theft, 
                to third party property damage. Find out more and compare these different types 
                of insurance now!'
                />
            </div>
        </div>
    )
}

export default InsuranceTypes