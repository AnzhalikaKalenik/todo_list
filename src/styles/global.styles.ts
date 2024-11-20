import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */

//@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Roboto:wght@400;500&display=swap');

body {
    font: 16px/1.4 'Roboto', sans-serif;
    background: #282a36;
    color: #f8f8f2;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box; //чтобы высота без скролла определилась
    display: flex;
    align-items: center; //все что внутри центрируем
    justify-content: center;

    /* --background: #282a36;
    --grey: #44475a;
    --white: #f8f8f2;
    --dark-white: #f8f8f2ef;
    --dark-blue: #6272a4;
    --cyan: #8be9fd;
    --green: #50fa7b;
    --orange: #ffb86c;
    --pink: #ff79c6;
    --purple: #bd93f9;
    --red: #f55;
    --yellow: #f1fa8c; */
}
ol, ul {
	list-style: none;
  margin: 0;
	padding: 0;
}
`;
