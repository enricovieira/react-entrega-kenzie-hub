import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, h2, h1, p, span, main, header, div, h3, button, form, a, label, select,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body{
    
    width: 100vw;
    height: 100vh;

  }

  button{
    cursor: pointer;
  }
  
  :root{
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --succes: #3FE864;
    --negative: #E83F5B;

    --grey-50: #12121480
  }
  `;

export default GlobalStyle;
