import React from 'react'
import { Link } from 'react-router-dom'
import './options-modal.scss'
import Eye from '../../../assets/icons/eye.svg'
import PersonCheck from '../../../assets/icons/person-check.svg'
import PersonX from '../../../assets/icons/person-x.svg'

const OptionsModal = () => {
    return (
        <div className={"options-dropdown"}>
            <ul>
                <li>
                    <Link to={`/user-details`}>
                        <img src={Eye} alt="eye icon" /> <span>View Details</span>
                    </Link>
                </li>
                <li>
                    <img src={PersonX} alt="eye icon" /> <span>Blacklist User</span>
                </li>
                <li>
                    <img src={PersonCheck} alt="eye icon" /> <span>Activate User</span>
                </li>
            </ul>
        </div>
    )
}

export default OptionsModal
