import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
} from "@material-ui/core";
import {
  Add as AddIcon,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../actions/user";
import Navbar from "../layouts/Navbar";

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
    input: {
      color: '#ff0000',
    }
  },
}));

function Create() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "Male",
    job: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    dispatch(createUser(inputs, history));
  }

  return (
    <React.Fragment>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Create User</h1>
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
          type="text"
          name="name"
          label="Name"
          value={inputs.firstName}
          onChange={handleChange}
          fullWidth
          InputProps={{
              className: classes.input,
          }}
          error={inputs.name === '' && submitted}
          helperText={submitted? "Please Enter Your Name" : ''}
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
          type="email"
          name="email"
          label="Email"
          value={inputs.email}
          onChange={handleChange}
          fullWidth
          error={inputs.email === '' && submitted}
          helperText={submitted? "Please Enter Your Email" : ''}
        />
        <TextField
          type="text"
          name="job"
          label="Job"
          value={inputs.job}
          onChange={handleChange}
          fullWidth
          error={inputs.job === '' && submitted}
          helperText={submitted? "Please Enter Your Job" : ''}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Submit
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </form>
    </React.Fragment>
  );
}

export default Create;
