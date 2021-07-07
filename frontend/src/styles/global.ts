import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #232129;
    --background-secondary: #312e38;
    --orange-primary: #ff9000;
    --white-orange: #f4ede8;
    --red-error: #c53030;
    --grey: #656360;
    --white: #fff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: var(--background-secondary);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
