import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Filter from "../../molecules/filter-indicator";
import Options from "../../molecules/options-modal";
import OptionsBtn from '../../../assets/icons/dots-btn.svg';
import FilterBtn from '../../../assets/icons/filter-btn.svg';
import './table.scss';
import { User } from '../../../types/users';


interface Props {
    users: User[];
    loading?: boolean;
}

const tableHeaders = ['Organization', 'Username', 'Email', 'Phone number', 'Date joined', 'Status', ''];

const UsersTable: React.FC<Props> = ({
    users,
    loading = false,
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState<null | number>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState<null | string>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const options = useMemo(() => [10, 20, 30, 50], []);

    console.log('users fron inside table', users)

    const pageCount = Math.ceil(users?.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageUsers = users?.slice(offset, offset + itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value, 10);
        setItemsPerPage(value);
        setCurrentPage(0);
    };

    if (loading && users?.length === 0) {
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
                    {currentPageUsers?.map((user: User) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/dashboard/users/${user.id}`}>{user.organization}</Link>
                            </td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}</td>
                            <td>
                                <span className={`status-${user.status.toLowerCase()}`}>{user.status}</span>
                            </td>
                            <td>
                                <img
                                    src={OptionsBtn}
                                    alt="more"
                                    onClick={() => (isOptionsOpen === user.id ? setIsOptionsOpen(null) : setIsOptionsOpen(user.id))}
                                />
                                {isOptionsOpen === user.id && <Options id={user.id} />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {users?.length > 0 && (
                <div className="pagination-container">
                    <div className="page-info">
                        <p>
                            Showing{' '}
                            <span>
                                <select
                                    value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="page-select"
                                >
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </span>
                            {' '}out of {users.length}
                        </p>
                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        activeClassName="active"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item-btn"
                        previousLinkClassName="page-link"
                        nextClassName="page-item-btn"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        disabledClassName="disabled"
                        forcePage={currentPage}
                    />
                </div>
            )}
        </div>
    );
};

export default UsersTable;