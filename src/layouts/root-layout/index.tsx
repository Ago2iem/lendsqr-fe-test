import { Outlet } from "react-router-dom"
import Sidebar from "../../components/organism/sidebar"
import './root-layout.scss'
import Navbar from "../../components/organism/navbar"
import { useState } from "react"

const RootLayout = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return (
        <div className="layout">
            <div>
                <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                <div className="lower">
                    <Sidebar menuOpen={menuOpen} />
                    <div className="main-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RootLayout