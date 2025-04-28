import { Button, Container, Typography } from "@mui/material";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const handleClick = async () => {
    const res = await fetch(`${API_URL}/hello`);
    const data = await res.json();
    alert(data.message);
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        MERN + Vite + TS + MUI
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Call Backend
      </Button>
    </Container>
  );
}

export default App;
