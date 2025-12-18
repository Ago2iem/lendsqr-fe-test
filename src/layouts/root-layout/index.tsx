import { Outlet } from "react-router-dom"
import Sidebar from "../../components/organism/sidebar"
import './root-layout.scss'
import Navbar from "../../components/organism/navbar"

const RootLayout = () => {
    return (
        <div className="layout">
            <div>
                <Navbar />
                <div className="lower">
                    <Sidebar />
                    <div className="main-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RootLayout