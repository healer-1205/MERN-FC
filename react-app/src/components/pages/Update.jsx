import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, updateUserById } from "../../actions/user";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    buttonProgress: {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
}));

function Update() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const user = useSelector((state) => state.users?.item);
  const [inputs, setInputs] = useState({
    name: "",
    gender: "",
    email: "",
    job: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setInputs(user);
    }
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!inputs.name || !inputs.job || !inputs.email) {
      return;
    }
    dispatch(updateUserById(id, inputs, history));
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Update Member</h1>
      <form
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          type="text"
          label="Name"
          value={inputs.name}
          onChange={handleChange}
          fullWidth
          error={inputs.name === '' && submitted}
          helperText={inputs.name === '' && submitted ? "Please Enter Name" : ''}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            fullWidth
            labelId="gender"
            id="gender"
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="email"
          label="Email"
          value={inputs.email}
          onChange={handleChange}
          fullWidth
          error={inputs.email === '' && submitted}
          helperText={inputs.email === '' && submitted ? "Please Enter email" : ''}
        />
        <TextField
          type="text"
          name="job"
          label="Job"
          value={inputs.job}
          onChange={handleChange}
          fullWidth
          error={inputs.Job === '' && submitted}
          helperText={inputs.Job === '' && submitted ? "Please Enter Job" : ''}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} color="secondary" />
        )}
      </form>
    </React.Fragment>
  );
}

export default Update;
