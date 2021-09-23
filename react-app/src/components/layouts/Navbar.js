import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  VerifiedUser,
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
    textAlign: "center",
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
        <Typography variant="h6" className={classes.title}>
          ReactJs CRUD App With React Redux Thunk
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
