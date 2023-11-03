import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import RouteProvider from "./routers/RouteProvider";
import ModalSearch from "./components/modals/ModalSearch";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFA500",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#111111",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const App = () => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode} />
      <RouteProvider />
      <ModalSearch />
    </ThemeProvider>
  );
};

export default App;
