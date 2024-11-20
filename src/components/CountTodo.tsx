import styled from 'styled-components';

const SDiv = styled.div`
    margin: 20px;
    font-size: 24px;
    font-weight: bold;
`;

type CountTodoProp = {
    count: number;
};

const CountTodo: React.FC<CountTodoProp> = ({ count }) => {
    return <SDiv>{count} tasks remaining</SDiv>;
};

export default CountTodo;
