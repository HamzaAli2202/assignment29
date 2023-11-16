import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";

export const Assignment29 = () => {
  const [data, setData] = useState(0);
  const [clr, setClr] = useState("");

  useEffect(() => {
    if (data >= 0 && data <= 20) {
      setClr("green");
    } else if (data >= 20 && data <= 30) {
      setClr("blue");
    } else if (data >= 30 && data <= 40) {
      setClr("yellow");
    } else setClr("red");
  }, [data]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>Speedo Meter</h1>
      </Grid>
      <Grid item xs={4}>
        <Button
          disabled={data === 0}
          onClick={() => data > 0 && setData(data - 5)}
          variant="contained"
          fullWidth
        >
          Minus
        </Button>
      </Grid>
      <Grid sx={{ textAlign: "center", fontSize: 25 }} item xs={4}>
        {data}
      </Grid>
      <Grid item xs={4}>
        <Button
          disabled={data === 50}
          onClick={() => data < 50 && setData(data + 5)}
          variant="contained"
          fullWidth
        >
          Plus
        </Button>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid
        sx={{
          height: 150,
          border: "3px solid brown",
          marginTop: 3,
          borderRadius: 5,
          bgcolor: clr,
        }}
        item
        xs={6}
      ></Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};
