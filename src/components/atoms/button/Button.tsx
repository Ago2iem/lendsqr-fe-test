import React from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-red' | 'outline-primary';
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'outline',
    onClick,
    disabled = false
}) => {
    return (
        <button
            className={`button button--${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};