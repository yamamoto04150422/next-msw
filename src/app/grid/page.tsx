"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const App: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* xs: 12カラム（全幅）; sm: 6カラム（半幅）; md: 4カラム（1/3幅） */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 5</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Item 6</Paper>
      </Grid>
    </Grid>
  );
};

export default App;
