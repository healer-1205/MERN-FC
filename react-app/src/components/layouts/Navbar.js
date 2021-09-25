import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  VerifiedUser,
  Menu,
  AdbRounded,
} from "@material-ui/icons";
import { logoutUser } from '../../actions/authActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  table: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
}));

function Navbar() {
  const classes = useStyles();
  const users = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{marginRight: '3%'}}>
          <Link to="/dashboard" style={{color: 'white', textDecoration: 'none'}}>Dashboard</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to="/users" style={{color: 'white', textDecoration: 'none'}}>Users</Link>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<VerifiedUser />}
          onClick={onLogoutClick}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
