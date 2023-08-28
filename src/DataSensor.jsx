import  { useEffect, useState } from "react";
import { Typography, Container, Paper, Grid } from "@mui/material";
import { DateTime } from "luxon";
import axios from "axios";

const DataSensor =()=>{
    const [temperatura, setTemperatura] = useState("");
    const [humedad, setHumedad] = useState("");
    const [createat, setCreateat] = useState(DateTime.local());
    const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzYnhvdHJlZXJyamFwZndiYWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MDIxNTUsImV4cCI6MjAwODQ3ODE1NX0.SUzX9mO4vZZ2xNmTD_6Y9MLzpFOHgfqxWKnWvMPdNsI";
  
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
    return(
        <Container sx={{ marginTop: "20px" }} maxWidth="md">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 120,
                width: "100%",
                padding:"20px"
              }}
            >
              <Typography
                style={{ fontFamily: "Signika Negative", fontWeight: "bold" }}
                variant="h4"
              >
                Temperatura
              </Typography>
              <Typography
                style={{ fontFamily: "Signika Negative" }}
                component="p"
                variant="h4"
              >
                🔥{temperatura} C°
              </Typography>
              <Typography
                variant="body1"
                style={{ fontFamily: "Signika Negative" }}
              >
                Ultima Actualización{" "}
                {createat.toFormat("yyyy-MM-dd HH:mm:ss")}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 120,
                width: "100%",
                padding:"20px"
              }}
            >
              <Typography
                style={{ fontFamily: "Signika Negative", fontWeight: "bold" }}
                variant="h4"
              >
                Humedad
              </Typography>
              <Typography
                style={{ fontFamily: "Signika Negative" }}
                component="p"
                variant="h4"
              >
                💧{humedad}%
              </Typography>
              <Typography
                variant="body1"
                style={{ fontFamily: "Signika Negative" }}
              >
                Ultima Actualización{" "}
                {createat.toFormat("yyyy-MM-dd HH:mm:ss")}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    )
}

export default DataSensor;