import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import UsersTable from '../components/organism/table';
import type { User } from '../types/users';

vi.mock('./table.scss', () => ({}));

vi.mock('../../molecules/filter-indicator', () => ({
  default: () => <div data-testid="filter-form">Filter Component</div>
}));

vi.mock('../../molecules/options-modal', () => ({
  default: () => (
    <div>
      <span>View Details</span>
      <span>Blacklist User</span>
      <span>Activate User</span>
    </div>
  )
}));

vi.mock('../../../assets/icons/dots-btn.svg', () => ({ default: 'dots-btn.svg' }));
vi.mock('../../../assets/icons/filter-btn.svg', () => ({ default: 'filter-btn.svg' }));

vi.mock('react-paginate', () => ({
  default: () => <div data-testid="pagination">Pagination</div>
}));

const mockUsers: User[] = [
  {
    id: '1',
    organization: 'Org1',
    username: 'user1',
    email: 'user1@example.com',
    phoneNumber: '1234567890',
    createdAt: '2024-06-01T12:00:00Z',
    status: 'Active'
  },
  {
    id: '2',
    organization: 'Org2',
    username: 'user2',
    email: 'user2@example.com',
    phoneNumber: '0987654321',
    createdAt: '2024-06-02T12:00:00Z',
    status: 'Inactive'
  },
] as User[];

describe('UsersTable', () => {
  test('renders table headers', () => {
    render(
      <MemoryRouter>
        <UsersTable users={mockUsers} loading={false} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Organization/i)).toBeInTheDocument();
    expect(screen.getByText(/Username/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByText(/Date joined/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });

  test('renders user rows', () => {
    render(
      <MemoryRouter>
        <UsersTable users={mockUsers} loading={false} />
      </MemoryRouter>
    );

    expect(screen.getByText('Org1')).toBeInTheDocument();
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user1@example.com')).toBeInTheDocument();
    expect(screen.getByText('Org2')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('user2@example.com')).toBeInTheDocument();
  });

  test('opens filter modal when filter icon is clicked', () => {
    render(
      <MemoryRouter>
        <UsersTable users={mockUsers} loading={false} />
      </MemoryRouter>
    );

    const filterIcons = screen.getAllByAltText('filter-icon');
    fireEvent.click(filterIcons[0]);

    expect(screen.getByTestId('filter-form')).toBeInTheDocument();
  });

  test('opens options modal when more icon is clicked', () => {
    render(
      <MemoryRouter>
        <UsersTable users={mockUsers} loading={false} />
      </MemoryRouter>
    );

    const moreIcons = screen.getAllByAltText('more');
    fireEvent.click(moreIcons[0]);

    expect(screen.getByText(/View Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Blacklist User/i)).toBeInTheDocument();
    expect(screen.getByText(/Activate User/i)).toBeInTheDocument();
  });
});