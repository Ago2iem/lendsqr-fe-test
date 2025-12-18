import UsersCard from '../components/atoms/users-card'
import UsersTable from '../components/organism/table'
import '../styles/dashboard.scss'
import { cardContent } from '../common/dashboard-card'
import { staticUsers } from '../common/users'

const Dashboard = () => {

    return (
        <div className="dashboard">
            <span className='text-dashboard'>Users</span>

            <div className='users'>
                {cardContent.map((content, index) => (
                    <UsersCard
                        key={index}
                        text={content.text}
                        icon={content.icon}
                        number={content.number}
                        variant={content.variant}
                    />
                ))}
            </div>

            <UsersTable users={staticUsers} loading={false} />
        </div>
    )
}

export default Dashboard