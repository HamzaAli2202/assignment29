import React, { useState } from "react";
import { Grid, TextField, Card, CardContent, Button } from "@mui/material";

export const Home = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>To Do List</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setInput(e.target.value)}
              variant="outlined"
              fullWidth
              label="Enter Here"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => setData([...data, input])}
              variant="contained"
              fullWidth
            >
              submit
            </Button>
          </Grid>
          {data.map((item) => (
            <Grid
              sx={{
                textAlign: "center",
                fontSize: 25,
                height: 55,
                fontWeight: "bolder",
              }}
              item
              xs={12}
            >
              {item}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
