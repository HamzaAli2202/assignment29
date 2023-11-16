import React, { useState } from "react";
import { Grid, Card, CardContent, Button, TextField } from "@mui/material";

export const AsgnReact35 = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>Get Dynamic Field</h1>
          </Grid>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setInput(e.target.value)}
              variant="outlined"
              label="Enter Color"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setData([...data, input])}
              sx={{ height: 55 }}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          {data.map((item) => (
            <Grid item xs={3}>
              <Card
                sx={{
                  bgcolor: item,
                  height: 200,
                  width: 200,
                  border: "2px solid black",
                  borderRadius: "180px",
                }}
              >
                <CardContent>
                  <h3 style={{ textAlign: "center", marginTop: 60 }}>{item}</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
