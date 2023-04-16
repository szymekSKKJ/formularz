import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "375px",
  lg: "425px",
  xl: "768px",
  "2xl": "1024px",
  "3xl": "1440px",
};

const theme = extendTheme({ breakpoints });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
