import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
#root,
body,
html,
root {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 'Lato', sans-serif;
}

label,
textarea,
input {
  font: 400 15px/1.8 'Lato', sans-serif;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color:  rgb(97 14 14) !important;
  }
  input:-moz-placeholder,
  textarea:-moz-placeholder { /* Firefox 18- */
  color: rgb(97 14 14) !important;  
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {  /* Firefox 19+ */
  color: rgb(97 14 14) !important;  
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {  
  color: rgb(97 14 14) !important;  
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
`;

export default GlobalStyles;
