import { useEffect } from 'react';
import UsersCard from '../components/atoms/users-card';
import UsersTable from '../components/organism/table';
import '../styles/dashboard.scss';
import { cardContent } from '../common/dashboard-card';
import { useGetAllUsers } from '../api/queries/useUsers';
import { FadeLoader } from 'react-spinners';
import User from '../assets/icons/np-user.svg'


const Dashboard = () => {
    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllUsers();



    if (isLoading) {
        return <div className="spinner">
            <FadeLoader color='#213F7D' />
        </div>
    }

    if (isError) {
        return <div className="dashboard">Error loading users: {error.message}</div>;
    }

    return (
        <div className="dashboard">
            <span className='text-dashboard'>Users</span>

            <div className='users'>
                <UsersCard
                    text={'Users'}
                    icon={User}
                    number={data.length}
                    variant={'purple'}
                />
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

            <UsersTable
                users={data}
                loading={isLoading}
            />
        </div>
    );
};

export default Dashboard;