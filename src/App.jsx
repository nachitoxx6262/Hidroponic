
import { Routes, Route } from "react-router-dom";
import Hidroponic from './Hidroponic';
import { Box, useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Navbar from './Navbar';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    <Box width="100%" height="100%"  >
      <Routes>
      <Route path="/" element={<Hidroponic />} />
      </Routes>
</Box>
    </ThemeProvider>
  )
}

export default App
