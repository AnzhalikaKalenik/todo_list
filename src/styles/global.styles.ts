import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
    font: 16px/1.4 'Roboto', sans-serif;
    background: #282a36;
    color: #f8f8f2;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box; 
    display: flex;
    justify-content: center;
}
ol, ul {
	list-style: none;
  margin: 0;
	padding: 0;
}
`;
