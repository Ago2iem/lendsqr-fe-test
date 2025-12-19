import { Outlet, useNavigate } from "react-router-dom"
import '../styles/user.scss'
import Arrow from '../assets/icons/arrow-back.svg'
import Star from '../assets/icons/filled-star.svg'
import Person from '../assets/icons/person.svg'
import { Button } from "../components/atoms/button/Button"
import UserDetailsBody from "../components/molecules/user-details-body"
import { staticUser } from "../common/users"
import { useGetUserById } from "../api/queries/useUsers"
import { FadeLoader } from "react-spinners"

const UserLayout = () => {
    const navigate = useNavigate()
    const { data, isError, isLoading, error } = useGetUserById()


    if (isError) {
        return <div className="user-layout">Error loading user: {error.message}</div>;
    }

    if (isLoading) {
        return <div className="spinner">
            <FadeLoader color='#213F7D' />
        </div>
    }
    return (
        <div className="user-layout">
            <div className="top" >
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
            </div>

            <div className="nav">
                <div className="inner-div">
                    <div className="user-right">
                        <img src={Person} alt="" />
                    </div>
                    <div className="user-left">
                        <div className="group group--first">
                            <span className="name">{data?.fullName}</span>
                            <span className="name name--id">{data?.id}</span>
                        </div>
                        <div className="group group--border">
                            <span className="name name--user">User's Tier</span>
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
                    <div className="btn btn--active">
                        <span>General Details</span>
                    </div>
                    <div className="btn">
                        <span>Documents</span>
                    </div>
                    <div className="btn">
                        <span>Bank Details</span>
                    </div>
                    <div className="btn">
                        <span>Loans</span>
                    </div>
                    <div className="btn">
                        <span>Savings</span>
                    </div>
                    <div className="btn">
                        <span>App and Systems</span>
                    </div>
                </div>
            </div>

            {data && <UserDetailsBody user={data} />}
        </div>
    )
}

export default UserLayout