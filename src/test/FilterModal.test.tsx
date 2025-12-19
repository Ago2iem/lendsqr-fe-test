import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import FilterModal from '../components/molecules/filter-indicator';

vi.mock('./filter-indicator.scss', () => ({}));

vi.mock('../../atoms/button/Button', () => ({
  Button: ({ children, onClick, type, variant }: {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: string;
  }) => (
    <button onClick={onClick} type={type} data-variant={variant}>
      {children}
    </button>
  ),
}));

describe('FilterModal', () => {
  test('renders all filter fields', () => {
    render(<FilterModal />);

    expect(screen.getByLabelText(/Organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  });

  test('submits the form', () => {
    render(<FilterModal />);

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.click(screen.getByText(/Filter/i));

    expect(screen.getByLabelText(/Username/i)).toHaveValue('testuser');
  });

  test('resets the form', () => {
    render(<FilterModal />);

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.click(screen.getByText(/Reset/i));

    expect(screen.getByLabelText(/Username/i)).toHaveValue('');
  });
});