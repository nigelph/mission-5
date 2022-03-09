import React from 'react'
import buttonStyle from './BigButton.module.css'

function BigButton(props) {
    return (
        <button className={buttonStyle['button-style']} style={props.style} >
            <div className={buttonStyle['button-inner']}>
                <img src={props.buttonImage} />
                <h4>{props.buttonTitle}</h4>
            </div>
        </button >
    )
}

export default BigButton