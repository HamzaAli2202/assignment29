import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:4100/userlist");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid align="center" item xs={12}>
        <h1>UserList</h1>
      </Grid>
      {data.map((item) => (
        <Grid item xs={6}>
          <Card sx={{ border: `3px solid ${item.clr}`, borderRadius: 10 }}>
            <CardContent>
              {" "}
              <h4>
                <span>id:</span>
                {item.id}
              </h4>
              <h4>
                <span>Name:</span>
                {item.name}
              </h4>
              <h4>
                <span>City:</span>
                {item.city}
              </h4>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
