import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import { DateTime } from "luxon";
import axios from "axios";

const Hidroponic = () => {
  const [temperatura, setTemperatura] = useState("");
  const [humedad, setHumedad] = useState("");
  const [createat, setCreateat] = useState(DateTime.local());
  const apikey = "TU_API_KEY_AQUÍ";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://usbxotreerrjapfwbaap.supabase.co/rest/v1/sensor_data?select=*",
          {
            headers: { "apikey": `${apikey}` },
          }
        );

        const data = response.data;
        const ultimo = data.length - 1;
        const last_data = data[ultimo];
        setTemperatura(last_data.temperature);
        setHumedad(last_data.humidity);
        let time = last_data.created_at;
        let realtime = DateTime.fromISO(time).setZone(
          "America/Argentina/Buenos_Aires"
        );
        setCreateat(realtime);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

      <Container
        component="main"
        sx={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}
        maxWidth="sm"
      >
        <Typography
          color="white"
          variant="h4"
          component="h1"
          textAlign="center"
          style={{ fontFamily: "Architects Daughter" }}
          gutterBottom
        >
          Temperatura y Humedad dentro del invernadero
        </Typography>
      </Container>

      <Container sx={{ marginTop: "20px" }} maxWidth="md">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 120,
                width: "100%",
              }}
            >
              <Typography
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
                variant="h4"
              >
                Temperatura
              </Typography>
              <Typography
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
                component="p"
                variant="h4"
              >
                🔥{temperatura} C°
              </Typography>
              <Typography
                variant="body1"
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
              >
                Ultima Actualización{" "}
                {createat.toFormat("yyyy-MM-dd HH:mm:ss")}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 120,
                width: "100%",
              }}
            >
              <Typography
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
                variant="h4"
              >
                Humedad
              </Typography>
              <Typography
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
                component="p"
                variant="h4"
              >
                💧{humedad}%
              </Typography>
              <Typography
                variant="body1"
                style={{ fontFamily: "Poiret One", fontWeight: "bold" }}
              >
                Ultima Actualización{" "}
                {createat.toFormat("yyyy-MM-dd HH:mm:ss")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hidroponic;
