import React from 'react'
import MainSection from './components/MainSection/MainSection'
import InsuranceTypes from './components/InsuranceTypes/InsuranceTypes'
import MechanicalBreakdown from './components/MechanicalBreakdown/MechanicalBreakdown'
import InsuranceInformation from './components/InsuranceInformation/InsuranceInformation'
import ButtonArea from './components/ButtonArea/ButtonArea'

function InsuranceHome() {
    return (
        <div>
            <MainSection />
            <InsuranceTypes />
            <MechanicalBreakdown />
            <InsuranceInformation />
            <ButtonArea />
        </div>
    )
}

export default InsuranceHome