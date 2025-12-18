import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from "../../molecules/filter-indicator";
import Options from "../../molecules/options-modal";
import OptionsBtn from '../../../assets/icons/dots-btn.svg'
import FilterBtn from '../../../assets/icons/filter-btn.svg'
import './table.scss';

interface User {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
    status: string;
}

interface Props {
    users: User[];
    loading?: boolean;
}

const tableHeaders = ['Organization', 'Username', 'Email', 'Phone number', 'Date joined', 'Status', ''];

const UsersTable: React.FC<Props> = ({ users, loading = false }) => {
    const [isFilterOpen, setIsFilterOpen] = useState<null | number>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState<null | string>(null);

    const validUsers = useMemo(() => users, [users]);

    if (loading) {
        return <div className="users-table-loading">Loading users...</div>;
    }

    return (
        <div data-testid="user-table" className="users-table">
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>
                                <div>
                                    <span>{header}</span>
                                    {header && (
                                        <img
                                            src={FilterBtn}
                                            alt="filter-icon"
                                            onClick={() => (isFilterOpen === index ? setIsFilterOpen(null) : setIsFilterOpen(index))}
                                        />
                                    )}
                                </div>
                                {isFilterOpen === index && <Filter index={index} />}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {validUsers.map((user: User) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/dashboard/users/${user.id}`}>{user.organization}</Link>
                            </td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.createdAt}</td>
                            <td>
                                <span className={`status-${user.status.toLowerCase()}`}>{user.status}</span>
                            </td>
                            <td>
                                <img
                                    src={OptionsBtn}
                                    alt="more"
                                    onClick={() => (isOptionsOpen === user.id ? setIsOptionsOpen(null) : setIsOptionsOpen(user.id))}
                                />
                                {isOptionsOpen === user.id && <Options />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;