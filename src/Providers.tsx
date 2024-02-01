import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: all 0.5s linear;
    }
`;

const lightTheme = {
  body: "white",
  text: "black",
};

const darkTheme = {
  body: "black",
  text: "white",
};

const Providers = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={themeToggler}>Toggle Theme</button>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default Providers;
