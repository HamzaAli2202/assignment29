import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

export const Bulb = () => {
  const [data, setData] = useState(false);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid sx={{ textAlign: "center" }} item xs={6}>
        {data ? (
          <img src="./images/Bulbon.png" alt="" />
        ) : (
          <img src="./images/Bulboff.png" alt="" />
        )}
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={2}>
        <Button onClick={() => setData(!data)} variant="contained" fullWidth>
          {data ? "ON" : "OFF"}
        </Button>
      </Grid>
    </Grid>
  );
};
