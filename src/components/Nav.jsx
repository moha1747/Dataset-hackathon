import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ years }) => {
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Diversity Dashboard
        </Typography>
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
  );
};

Nav.propTypes = {
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Nav;
