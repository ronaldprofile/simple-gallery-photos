import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body,
  #root {
    height: 100vh;
  }

  body {
    background-color: #09090A;
    font: 400 1rem "Roboto", sans-serif;
  }

  button,
  input {
    font-size: 1rem;
    font-family: "Roboto";
  }

  button {
    border: 0;
    border-radius: 0.312rem;
    cursor: pointer;
  }
`;
