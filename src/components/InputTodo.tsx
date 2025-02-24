import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
    display: flex;
    width: 80%;
    padding: 10px;
    margin: 10px;
    border: 2px double #bd93f9;
    border-radius: 8px;
`;
type InputTodoProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputTodo: React.FC<InputTodoProps> = ({ value, onChange, onKeyPress }) => {
    return (
        <SInput
            type='text'
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder='New todo...'
        ></SInput>
    );
};

export default InputTodo;
