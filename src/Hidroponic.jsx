import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import DataSensor from "./DataSensor";
import "animate.css";

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
            textAlign: "center", // Alineación centrada
            padding: "0 20px", // Espaciado lateral para dispositivos móviles
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
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="space-around"
          alignItems="center"
          marginTop={"-50px"}
        >
          {/* Item 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              sx={{ zIndex: 2 }}
            >
              <Box
                bgcolor="white"
                borderRadius="50px"
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="./plant.svg"
                  width="45px"
                  alt="Icono planta"
                  className="animate__animated animate__fadeInDown animate__duration-3s animate__delay-1s"
                />
              </Box>
              <Typography
                variant="h6"
                fontFamily="Signika Negative"
                fontWeight="400"
              >
                No necesita tierra
              </Typography>
            </Box>
          </Grid>
          {/* Repite lo anterior para los otros ítems */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              sx={{ zIndex: 2 }}
            >
              <Box
                bgcolor="white"
                borderRadius="50px"
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="./water.svg"
                  width="35px"
                  alt="Icono planta"
                  className="animate__animated animate__fadeInDown animate__duration-3s animate__delay-1s"
                />
              </Box>
              <Typography
                variant="h6"
                fontFamily="Signika Negative"
                fontWeight="400"
              >
                Ahorro de agua
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              sx={{ zIndex: 2 }}
            >
              <Box
                bgcolor="white"
                borderRadius="50px"
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="./sand.svg"
                  width="30px"
                  alt="Icono planta"
                  className="animate__animated animate__fadeInDown animate__duration-3s animate__delay-1s"
                />
              </Box>
              <Typography
                variant="h6"
                fontFamily="Signika Negative"
                fontWeight="400"
              >
                x3-x4 más rapido
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              sx={{ zIndex: 2 }}
            >
              <Box
                bgcolor="white"
                borderRadius="50px"
                width="90px"
                height="90px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src="./chart.svg"
                  width="40px"
                  alt="Icono planta"
                  className="animate__animated animate__fadeInDown animate__duration-3s animate__delay-1s"
                />
              </Box>
              <Typography
                variant="h6"
                fontFamily="Signika Negative"
                fontWeight="400"
              >
                80% rendimiento
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={7} sx={{ marginTop: "70px", padding: "10px" }}>
  <Container>
    <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          margin="10px"
        >
          <Typography
            variant="h4"
            fontFamily="Signika Negative"
            fontWeight={700}
            margin="20px"
          >
            ¿Qué es la hidroponía?
          </Typography>
          <Box
            width="80px"
            height="80px"
            backgroundColor="#B5EABC"
            borderRadius="100%"
            zIndex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <img src="./hidroplant.svg" width="50px" height="50px" />
          </Box>
        </Box>
        <Box margin="20px">
          <Typography
            variant="h6"
            fontFamily="Signika Negative"
            fontWeight={300}
          >
            Es un método revolucionario que nos permite cultivar plantas sin
            suelo, utilizando soluciones nutritivas y agua para nutrir las raíces
            directamente. Esto significa cultivos más eficientes, productos más
            frescos y un impacto ambiental reducido. Nuestras plantas crecen en un
            entorno controlado, donde la luz, la temperatura y los nutrientes se
            optimizan para garantizar un crecimiento saludable y vibrante.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems={{ xs: "center", sm: "flex-start" }}
        marginLeft={{ xs: 0, sm: "20px" }}
      >
        <img src="./hidroponic.svg" width="500px"  />
      </Box>
    </Box>
  </Container>
</Paper>


      <DataSensor />
    </Box>
  );
};

export default Hidroponic;
