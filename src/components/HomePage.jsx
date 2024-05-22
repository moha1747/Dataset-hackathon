import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const HomePage = ({ years }) => {
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Diversity in Tech Workplace
      </Typography>
      <List>
        {/* Maps every year's data to nav bar links */}
        {years &&
          years.map((year) => (
            <ListItemButton component={Link} to={`/year/${year}`} key={year}>
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
