import{ useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import YearPage from "./components/YearPage";
import HomePage from "./components/HomePage";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/organized_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const years = Object.keys(data);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {years.map((year) => (
            <Button
              color="inherit"
              component={Link}
              to={`/year/${year}`}
              key={year}
            >
              {year}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage years={years} />} />
          {years.map((year) => (
            <Route
              key={year}
              path={`/year/:year`}
              element={<YearPage data={data} />}
            />
          ))}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
