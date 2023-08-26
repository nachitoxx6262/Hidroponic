
import { Button, Container,Box } from "@mui/material";



const Navbar = () => {
  return (
    <Container style={{ backgroundColor: "#ffffff", color: "#ffffff", borderRadius: "10px",margin:"auto", padding:"8px" }}  >
      <Box display={"flex"} justifyContent={"space-evenly"}>
      <Button to="#" style={{ color: "#969594", fontWeight: "bold", fontSize: "18px",fontFamily: "Architects Daughter" }}>
        Inicio
      </Button>
      <Button to="#about" style={{ color: "#969594", fontWeight: "bold",fontSize: "18px",fontFamily: "Architects Daughter" }}>Acerca de</Button>
      <Button to="#contact" style={{ color: "#969594",fontWeight: "bold", fontSize: "18px", fontFamily: "Architects Daughter" }}>Contacto</Button>
      </Box>
    </Container>
  );
};

export default Navbar;