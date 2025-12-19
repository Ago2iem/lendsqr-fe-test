import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import OptionsModal from '../components/molecules/options-modal';

vi.mock('./options-modal.scss', () => ({}));

vi.mock('../../../assets/icons/eye.svg', () => ({ default: 'eye-icon.svg' }));
vi.mock('../../../assets/icons/person-check.svg', () => ({ default: 'person-check-icon.svg' }));
vi.mock('../../../assets/icons/person-x.svg', () => ({ default: 'person-x-icon.svg' }));

describe('OptionsModal', () => {
    const mockId = '54321';

    test('renders all options', () => {
        render(
            <MemoryRouter>
                <OptionsModal id={mockId} />
            </MemoryRouter>
        );

        expect(screen.getByText(/View Details/i)).toBeInTheDocument();
        expect(screen.getByText(/Blacklist User/i)).toBeInTheDocument();
        expect(screen.getByText(/Activate User/i)).toBeInTheDocument();
    });

    test('renders correct link for View Details', () => {
        render(
            <MemoryRouter>
                <OptionsModal id={mockId} />
            </MemoryRouter>
        );

        const viewDetailsLink = screen.getByRole('link', { name: /view details/i });
        expect(viewDetailsLink).toBeInTheDocument();
        expect(viewDetailsLink).toHaveAttribute('href', `/user-details/${mockId}`);
    });

    test('renders all icons with correct alt text', () => {
        render(
            <MemoryRouter>
                <OptionsModal id={mockId} />
            </MemoryRouter>
        );

        const icons = screen.getAllByRole('img');
        expect(icons).toHaveLength(3);

        icons.forEach(icon => {
            expect(icon).toHaveAttribute('alt');
        });
    });

    test('renders as a list with correct structure', () => {
        render(
            <MemoryRouter>
                <OptionsModal id={mockId} />
            </MemoryRouter>
        );

        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });
});