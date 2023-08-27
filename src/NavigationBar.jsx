import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavigationBar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="absolute" sx={{ mt: 0, backgroundColor: "#ffffff" }}>
      <Toolbar>
        <Typography variant="h6" color={"black"} sx={{
          flexGrow: 1,
          fontSize: "18px",
          fontFamily: "Signika Negative",
        }}>
          El Asturiano
        </Typography>

        {/* Icono de menú para dispositivos móviles */}
        <IconButton
          edge="start"
          color={"#98FD59"}
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Botones para dispositivos de mayor tamaño */}
        <Box display={{ xs: "none", md: "flex" }} gap={1}>
          <Button
            sx={{
              color: activeSection === "inicio" ? "#98FD59" : "black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }}
            onClick={() => handleSectionClick("inicio")}
          >
            Inicio
          </Button>
          <Button
            sx={{
              color: activeSection === "sobre-nosotros" ? "#98FD59" : "black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }}
            onClick={() => handleSectionClick("sobre-nosotros")}
          >
            Sobre nosotros
          </Button>
          <Button
            sx={{
              color: activeSection === "productos" ? "#98FD59" : "black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }}
            onClick={() => handleSectionClick("productos")}
          >
            Productos
          </Button>
          <Button
            sx={{
              color: activeSection === "invernadero" ? "#98FD59" : "black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }}
            onClick={() => handleSectionClick("invernadero")}
          >
            Invernadero
          </Button>
        </Box>

        {/* Menú desplegable en dispositivos móviles */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            display: { xs: "block", md: "none" },
            zIndex: 10,
          }}
        >
          <MenuItem onClick={() => handleSectionClick("inicio")}>Inicio</MenuItem>
          <MenuItem onClick={() => handleSectionClick("sobre-nosotros")}>Sobre nosotros</MenuItem>
          <MenuItem onClick={() => handleSectionClick("productos")}>Productos</MenuItem>
          <MenuItem onClick={() => handleSectionClick("invernadero")}>Invernadero</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;