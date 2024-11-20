import React from 'react';
import styled, { css } from 'styled-components';

const SButton = styled.button<{ $primary?: boolean }>`
    margin: 10px;
    width: 80px;
    padding: 10px;
    border: 2px solid #bd93f9;
    border-radius: 10px;
    background: #282a36;
    color: #f8f8f2;
    cursor: pointer;

    &:hover {
        background: #bd93f9;
    }

    ${props =>
        props.$primary &&
        css`
            width: 200px;
        `}
`;

type ButtonProps = {
    title: string;
    $primary?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, $primary, onClick }) => {
    return (
        <SButton $primary={$primary} onClick={onClick}>
            {title}
        </SButton>
    );
};
export default Button;
