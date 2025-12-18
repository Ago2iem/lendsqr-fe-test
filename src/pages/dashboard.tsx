import UsersCard from '../components/atoms/users-card'
import '../styles/dashboard.scss'
import { cardContent } from '../common/dashboard-card'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <span className='text-dashboard'>Users</span>

            <div className='users' >
                {cardContent.map((content) => (
                    <UsersCard text={content.text} icon={content.icon} number={content.number} variant={content.variant} />
                ))}
            </div>
        </div>



    )
}

export default Dashboard
