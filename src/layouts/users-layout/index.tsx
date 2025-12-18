import { Outlet, useNavigate } from "react-router-dom"
import './user-layout.scss'
import Arrow from '../../assets/icons/arrow-back.svg'
import Star from '../../assets/icons/filled-star.svg'
import Person from '../../assets/icons/person.svg'
import { Button } from "../../components/atoms/button/Button"

const UserLayout = () => {
    const navigate = useNavigate()
    return (
        <div className="user-layout">
            <div onClick={() => navigate('/dashboard')} className="back">
                <img src={Arrow} alt="" />
                <span className="back-text">Back to users</span>
            </div>

            <div className="btn-section">
                <span className="user-text">User Details</span>
                <div className="btn">
                    <Button variant="outline-red">
                        BLACKLIST USER
                    </Button>
                    <Button variant="outline-primary">
                        ACTIVATE USER
                    </Button>
                </div>
            </div>

            <div className="nav">

                <div className="inner-div">
                    <div className="user-right">
                        <img src={Person} alt="" />
                    </div>
                    <div className="user-left">
                        <div className="group group--border group--first">
                            <span className="name">Grace Effiom</span>
                            <span className="name name--id">LSQFf587g90</span>
                        </div>
                        <div className="group group--border">
                            <span className="name name--user">User's Teir</span>
                            <div className="stars">
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                            </div>
                        </div>
                        <div className="group">
                            <span className="name">₦200,000.00</span>
                            <span className="name name--bank">9912345678/Providus Bank</span>
                        </div>
                    </div>
                </div>

                <div className="nav-btn">
                    <div>
                        <span>General Details</span>
                    </div>
                    <div>
                        <span>Documents</span>
                    </div>
                    <div>
                        <span>Bank Details</span>
                    </div>
                    <div>
                        <span>Loans</span>
                    </div>
                    <div>
                        <span>Savings</span>
                    </div>
                    <div>
                        <span>App and Systems</span>
                    </div>
                </div>

            </div>
            <Outlet />
        </div>
    )
}

export default UserLayout
