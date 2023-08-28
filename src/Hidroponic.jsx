
import { Box, Typography, Container, Grid} from "@mui/material";
import DataSensor from "./DataSensor";


const Hidroponic = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: `url('/background.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxWidth: "100vw",
          width: "100vw",
          height: "400px",
          position: "relative",
        }}
      >
        {/* Transparencia verde sobre la imagen */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(2, 74, 0, 0.4)",
          }}
        />

        <Typography
          color="white"
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "Signika Negative",
            position: "relative",
            zIndex: 1,
            fontWeight: "700",
          }}
          gutterBottom
        >
          El Asturiano Hidroponia
        </Typography>
        <Typography
          color="white"
          variant="h6"
          textAlign="center"
          sx={{
            fontFamily: "Signika Negative",
            position: "relative",
            zIndex: 1,
          }}
          component="h2"
        >
          {
            "Fusionamos la agricultura con la innovación moderna para llevar hasta tu mesa la frescura y el sabor más auténtico."
          }
        </Typography>
      </Box>
      <Container >
        <Grid container spacing={3} justifyContent="space-around" alignItems="center" marginTop={"-50px"} >
          {/* Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  position="relative" sx={{zIndex: 2}}>
              <Box bgcolor="white" borderRadius="50px" width="90px" height="90px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src="./plant.svg" width="45px" alt="Icono planta" />
              </Box>
              <Typography variant="h6" fontFamily="Signika Negative" fontWeight="400">
                No necesita tierra
              </Typography>
            </Box>
          </Grid>
          {/* Repite lo anterior para los otros ítems */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" sx={{zIndex: 2}}>
              <Box bgcolor="white" borderRadius="50px" width="90px" height="90px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src="./water.svg" width="35px" alt="Icono planta" />
              </Box>
              <Typography variant="h6" fontFamily="Signika Negative" fontWeight="400">
              Ahorro de agua
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" sx={{zIndex: 2}}>
              <Box bgcolor="white" borderRadius="50px" width="90px" height="90px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src="./sand.svg" width="30px" alt="Icono planta" />
              </Box>
              <Typography variant="h6" fontFamily="Signika Negative" fontWeight="400">
              x3-x4 más rapido
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" sx={{zIndex: 2}}>
              <Box bgcolor="white" borderRadius="50px" width="90px" height="90px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <img src="./chart.svg" width="40px" alt="Icono planta" />
              </Box>
              <Typography variant="h6" fontFamily="Signika Negative" fontWeight="400">
              80% rendimiento
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <DataSensor/>
    </Box>
  );
};

export default Hidroponic;
