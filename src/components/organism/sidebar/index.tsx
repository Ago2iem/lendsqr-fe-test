import Tab from "../../atoms/tab"
import Brief from '../../../assets/icons/briefcaseIcon.svg'
import Home from '../../../assets/icons/home.svg'
import './sidebar.scss'
import { customersTabs, businessTabs, settingsTabs } from "../../../common/sidebar-tab"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Logout from '../../../assets/icons/sign-out.svg'

interface Props {
    menuOpen: boolean
}

const Sidebar = ({ menuOpen }: Props) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState<string>('User')

    const handleSelect = (route: string, select: string) => {
        navigate(route)
        setSelected(select)
    }
    return (
        <div className={`sidebar-container ${menuOpen && 'nav-active'}`}>
            <div className="sidebar">
                <div className="top">
                    <Tab onClick={() => handleSelect('/dashboard', 'Switch Organisation')} selected={selected} active={false} text="Switch Organisation" icon={Brief} />
                    <Tab onClick={() => handleSelect('/dashboard', 'Dashboard')} selected={selected} active={false} text="Dashboard" icon={Home} />
                </div>

                <div className="sidebar-costumer">
                    <p className="sidebar-costumer-title">CUSTOMERS</p>

                    {customersTabs.map((costomerTab) => (
                        <Tab text={costomerTab.text} onClick={() => handleSelect(costomerTab.route, costomerTab.text)} selected={selected} icon={costomerTab.icon} />
                    ))}
                </div>
                <div className="sidebar-costumer">
                    <p className="sidebar-costumer-title">BUSINESSES</p>

                    {businessTabs.map((costomerTab) => (
                        <Tab text={costomerTab.text} onClick={() => handleSelect(costomerTab.route, costomerTab.text)} selected={selected} icon={costomerTab.icon} />
                    ))}
                </div>
                <div className="sidebar-costumer">
                    <p className="sidebar-costumer-title">SETTINGS</p>

                    {settingsTabs.map((costomerTab) => (
                        <Tab text={costomerTab.text} onClick={() => handleSelect(costomerTab.route, costomerTab.text)} selected={selected} icon={costomerTab.icon} />
                    ))}
                </div>
                <div className={"logout"} onClick={() => navigate('/')}>
                    <div>
                        <img src={Logout} alt="logout icon" />
                        <span>Logout</span>
                    </div>

                    <span className={"version"}>v1.2.0</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
