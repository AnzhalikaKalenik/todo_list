import styled from 'styled-components';

type CheckboxProp = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SInput = styled.input`
    appearance: none;
    margin: 0 5px;
    width: 18px;
    height: 18px;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;

    :hover {
        background-color: white;
        opacity: 0.8;
    }

    :checked {
        background-color: #bd93f9;
    }

    :checked::before {
        margin-left: 3px;
        content: '';
        display: block;
        width: 3px;
        height: 8px;
        border: 3px solid transparent;
        border-radius: 3px;
        border-bottom-color: white;
        border-right-color: white;
        transform-origin: 50% 50%;
        transform: rotate(35deg);
    }
`;

const Checkbox: React.FC<CheckboxProp> = ({ checked, onChange }) => {
    return <SInput type='checkbox' checked={checked} onChange={onChange}></SInput>;
};

export default Checkbox;
