import React, { useState } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
export const Asgn35todolist = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleDelete = () => {
    const result = data.filter((elem) => elem !== elem);
    setData(result);
  };

  return (
    <Grid sx={{ marginTop: 5 }} container spacing={2}>
      <Grid item xs={8}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          label="Enter Here"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setData([...data, input])}
          sx={{ height: 55 }}
          variant="contained"
          fullWidth
        >
          add thought
        </Button>
      </Grid>
      {data.map((item) => (
        <React.Fragment>
          <Grid item xs={2}></Grid>

          <Grid item xs={8}>
            <Card sx={{ bgcolor: "black", color: "white" }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={11}>
                    {item}
                  </Grid>
                  <Grid item xs={1}>
                    <RestoreFromTrashIcon onClick={handleDelete} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};
