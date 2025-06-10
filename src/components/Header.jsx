import { AppBar, Toolbar, Box, Button, Divider } from "@mui/material";
import logo from "../assets/logo.svg";
import "../css/Header.css";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Header = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <Box className={`header-container ${darkMode ? "dark-header-container" : ""}`}>
      <AppBar position="relative" className={`header-appbar ${darkMode ? "dark-header-appbar" : ""}`}>
        <Toolbar className="header-toolbar">
          <Box component="img" src={logo} alt="Logo" className="header-logo" />
          <Box className="header-actions">
            <Button variant="outlined" className="home-button">
              Home
            </Button>
            <Button variant="contained" className="get-started-button">
              Get Started
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Header;
