import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUserById } from "../../actions/user";
import Navbar from "../layouts/Navbar";

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

function Read() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const users = useSelector((state) => state.users?.items);
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (!loading) {
      setOpen(loading);
    }
  }, [loading]);

  const openDialog = (_id) => {
    setOpen(true);
    setUserId(_id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    dispatch(deleteUserById(userId));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Link to="/create">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Create User
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.job}</TableCell>
                <TableCell>
                  <Link to={`/update/${row._id}`}>
                    <EditIcon>edit</EditIcon>
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteIcon onClick={() => openDialog(row._id)}>
                    delete
                  </DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="Delete User"
        >
          <DialogContent style={{ width: 300 }}>
            <DialogContentText>Are you sure?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}

export default Read;
