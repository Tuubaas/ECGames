import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark};
        display: flex;
        font-family: 'Open Sans', sans-serif; //-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;

        button {
            font-family: 'Open Sans', sans-serif;
        }
    }
`;
