import { CardType } from "../types/dashboard-types";
import User from '../assets/icons/np-user.svg'
import Group from '../assets/icons/group-user.svg'
import Loan from '../assets/icons/np-loan.svg'
import Coins from '../assets/icons/coins.svg'

export const cardContent: CardType[] = [
    {
        text: 'Active users',
        icon: Group,
        number: '2,300',
        variant: 'blue'

    },
    {
        text: 'Users with loans',
        icon: Loan,
        number: '2,300',
        variant: 'orange'

    },
    {
        text: 'Users with savings',
        icon: Coins,
        number: '2,300',
        variant: 'red'

    },
]