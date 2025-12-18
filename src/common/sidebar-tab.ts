import { SidebarType } from "../types/sidebar-types";
import Users from '../assets/icons/users.svg'
import Guarntors from '../assets/icons/user-friends.svg'
import Loans from '../assets/icons/sack.svg'
import Model from '../assets/icons/handshake-regular.svg'
import Saving from '../assets/icons/piggy-bank.svg'
import LoanR from '../assets/icons/loan.svg'
import Whitelist from '../assets/icons/user-check.svg'
import Karma from '../assets/icons/user-times.svg'
import Brief from '../assets/icons/briefcaseIcon.svg'
import Bank from '../assets/icons/bank.svg'
import Fees from '../assets/icons/coins-solid.svg'
import Trans from '../assets/icons/trans.svg'
import Services from '../assets/icons/galaxy.svg'
import ServiceA from '../assets/icons/user-cog.svg'
import Settlement from '../assets/icons/scroll.svg'
import Reports from '../assets/icons/chart-bar.svg'
import Pref from '../assets/icons/sliders.svg'
import Price from '../assets/icons/badge-percent.svg'
import Audit from '../assets/icons/clipboard-list.svg'

export const customersTabs: SidebarType[] = [
    {
        text: 'User',
        icon: Users,
        route: '/dashboard'
    },
    {
        text: 'Guarantors',
        icon: Guarntors,
        route: '/dashboard'
    },
    {
        text: 'Loans',
        icon: Loans,
        route: '/dashboard'
    },
    {
        text: 'Decision Models',
        icon: Model,
        route: '/dashboard'
    },
    {
        text: 'Savings',
        icon: Saving,
        route: '/dashboard'
    },
    {
        text: 'Load Requests',
        icon: LoanR,
        route: '/dashboard'
    },
    {
        text: 'Whitelist',
        icon: Whitelist,
        route: '/dashboard'
    },
    {
        text: 'Karma',
        icon: Karma,
        route: '/dashboard'
    },
]

export const businessTabs: SidebarType[] = [
    {
        text: 'Organisation',
        icon: Brief,
        route: '/dashboard'
    },
    {
        text: 'Loan Products',
        icon: LoanR,
        route: '/dashboard'
    },
    {
        text: 'Savings Product',
        icon: Bank,
        route: '/dashboard'
    },
    {
        text: 'Fees and Charges',
        icon: Fees,
        route: '/dashboard'
    },
    {
        text: 'Transactions',
        icon: Trans,
        route: '/dashboard'
    },
    {
        text: 'Services',
        icon: Services,
        route: '/dashboard'
    },
    {
        text: 'Service Accounts',
        icon: ServiceA,
        route: '/dashboard'
    },
    {
        text: 'Settlements',
        icon: Settlement,
        route: '/dashboard'
    },
    {
        text: 'Reports',
        icon: Reports,
        route: '/dashboard'
    },
]
export const settingsTabs: SidebarType[] = [
    {
        text: 'Preferences',
        icon: Pref,
        route: '/dashboard'
    },
    {
        text: 'Fees and Pricing',
        icon: Price,
        route: '/dashboard'
    },
    {
        text: 'Audit Logs',
        icon: Audit,
        route: '/dashboard'
    }
]