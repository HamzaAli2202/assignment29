import React from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const Registration = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2 style={{ textAlign: "center" }}>Registration Form</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Mobile Number" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="UserName" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Password" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Confirm Password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth>
                  submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth>
                  cancel
                </Button>
              </Grid>
              <Grid item xs={12}>
                If you have already register{" "}
                <a style={{ color: "red" }} href="http://localhost:3000/login">
                  Login Here
                </a>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
