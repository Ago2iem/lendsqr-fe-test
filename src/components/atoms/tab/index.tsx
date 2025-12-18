import React, { useState } from 'react'
import './tab.scss'

interface TabProps {
    text: string;
    active?: boolean;
    onClick?: () => void;
    icon: string;
    selected: string

}

const Tab = ({ text, active = false, onClick, icon, selected = 'User' }: TabProps) => {
    return (
        <div className={`tab ${selected == text ? 'tab--active' : ''}`} onClick={onClick}>
            <img src={icon} alt="" />
            <span className='text' >
                {text}
            </span>
        </div>
    )
}

export default Tab
