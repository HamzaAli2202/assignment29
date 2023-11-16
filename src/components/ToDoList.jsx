import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";

export const ToDoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [clr, setClr] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setData([...data, input.trim()]);
      setInput("");
    }
  };

  const hadleDelete = (item) => {
    const result = data.filter((elem) => elem !== item);
    setData(result);
  };

  useEffect(() => {
    if (data.length >= 1 && data.length < 3) {
      setClr("red");
    } else if (data.length >= 3 && data.length < 5) {
      setClr("green");
    } else if (data.length >= 5 && data.length < 7) {
      setClr("orange");
    } else if (data.length >= 7 && data.length < 10) {
      setClr("blue");
    } else if (data.length == 10) {
      setClr("yellow");
    } else setClr("aqua");
  }, [data]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card sx={{ bgcolor: clr, height: 55 }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              variant="outlined"
              label="Add Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={handleAdd}
              sx={{ height: 55 }}
              variant="contained"
              fullWidth
            >
              Add
            </Button>
          </Grid>
          {data.map((item) => (
            <Grid item xs={3} sx={{ textAlign: "center" }}>
              <h1>{item}</h1>
              <Button onClick={() => hadleDelete(item)} variant="contained">
                Delete
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
