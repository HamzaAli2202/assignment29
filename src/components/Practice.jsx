import React, { useState } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";

export const Practice = () => {
  const [clr, setClr] = useState(false);

  return (
    <Grid sx={{ marginTop: 10 }} container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ height: 250, bgcolor: clr ? "red" : "green" }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => setClr(!clr)} variant="contained" fullWidth>
              {clr ? "ON" : "OFF"}
            </Button>
          </Grid>
          {/* <Grid item xs={6}>
            <Button
              onClick={() => setClr("Green")}
              variant="contained"
              fullWidth
            >
              off
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};
