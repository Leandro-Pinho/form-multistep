import React from 'react'
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import './Steps.css'

const Steps = ({ currentStep }) => {
    return (
        <div className='steps'>
            <div className="step active">
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <BsSend />
                <p>Envio</p>
            </div>
        </div>
    )
}

export default Steps
