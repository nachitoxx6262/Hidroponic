import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,Link
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
    <AppBar position="sticky" sx={{ mt: 0,paddingTop:"0px", backgroundColor: "#ffffff",border: "none" }}>
      <Toolbar>
        <Typography variant="h6" color={"black"} sx={{
          flexGrow: 1,
          fontSize: "18px",
          fontFamily: "Signika Negative",
          fontWeight:"bold"
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
            href="#inicio"

          >
            Inicio
          </Button>
          <Button
            sx={{
              color: activeSection === "productos" ? "#98FD59" : "black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }}
            onClick={() => handleSectionClick("productos")}
            href="#productos"
            
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
            href="#invernadero"
          >
            Invernadero
          </Button>
            <Button
              sx={{
                color: activeSection === "sobre-nosotros" ? "#98FD59" : "black",
                fontFamily: "Signika Negative",
                fontWeight: "bold",
                borderRadius: 0,
              }}
              onClick={() => handleSectionClick("sobre-nosotros")}
            href="#nosotros"

            >
              Sobre nosotros
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
          <MenuItem  sx={{
              color:"black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }} onClick={() => handleSectionClick("inicio")}><Link  href="#inicio" sx={{textDecoration:"none",color:"black"}}>Inicio</Link ></MenuItem>
          <MenuItem  sx={{
              color:"black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }} onClick={() => handleSectionClick("sobre-nosotros")}><Link  href="#nosotros" sx={{textDecoration:"none",color:"black"}}>Sobre Nosotros</Link ></MenuItem>
          <MenuItem sx={{
              color:"black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
              
            }} onClick={() => handleSectionClick("productos")}><Link  href="#productos" sx={{textDecoration:"none",color:"black"}}>Productos</Link ></MenuItem>
          <MenuItem sx={{
              color:"black",
              fontFamily: "Signika Negative",
              fontWeight: "bold",
              borderRadius: 0,
            }} onClick={() => handleSectionClick("invernadero")}><Link  href="#invernadero" sx={{textDecoration:"none",color:"black"}}>Invernadero</Link ></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
