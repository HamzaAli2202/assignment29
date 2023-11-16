import React from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Grid sx={{ marginTop: 10 }} container spacing={2}>
      <Grid item xs={4.5}></Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2 style={{ textAlign: "center" }}>Login Form</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" fullWidth label="User Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={6}>
                <Link to="/home">
                  <Button variant="contained" fullWidth>
                    submit
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth>
                  cancel
                </Button>
              </Grid>
              <Grid item xs={12}>
                If you don't have an account?
                <a style={{ color: "red" }} href="http://localhost:3000/">
                  Register Here
                </a>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4.5}></Grid>
    </Grid>
  );
};
