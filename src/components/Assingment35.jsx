import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Assingment35 = () => {
  const [input, setInput] = useState("");

  const handleUpperCase = () => {
    setInput(input.toUpperCase());
  };
  const handleLowerCase = () => {
    setInput(input.toLocaleLowerCase());
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="secondary" fullWidth>
          text comp
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Link to="/asgn">
          <Button variant="contained" color="secondary" fullWidth>
            todo list
          </Button>
        </Link>
      </Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={8}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          fullWidth
          label="Enter the Text Here"
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleUpperCase}
          variant="contained"
          color="success"
          fullWidth
        >
          uppercase
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleLowerCase}
          variant="contained"
          color="success"
          fullWidth
        >
          lowercase
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button
          onClick={() => setInput("")}
          variant="contained"
          color="error"
          fullWidth
        >
          clear
        </Button>
      </Grid>

      <Grid item xs={6}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <h3>Preview Your Text Here</h3>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <h3>{input}</h3>
      </Grid>
    </Grid>
  );
};
