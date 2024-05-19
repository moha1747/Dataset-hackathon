import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const HomePage = ({ years }) => {
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Diversity Dashboard
      </Typography>
      <List>
        {years &&
          years.map((year) => (
            <ListItemButton LinkComponent={`/year/${year}`} key={year}>
              <ListItemText primary={year} />
            </ListItemButton>
          ))}
      </List>
    </Paper>
  );
};

HomePage.propTypes = {
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomePage;