import React from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-red' | 'outline-primary';
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit" | "reset" | "button" | undefined
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'outline',
    onClick,
    disabled = false,
    type
}) => {
    return (
        <button
            type={type}
            className={`button button--${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};