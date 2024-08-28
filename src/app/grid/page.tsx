"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const FullWidthItem = styled(Grid)({
  flexBasis: "100%",
  maxWidth: "100%",
});

const HalfWidthItem = styled(Grid)({
  flexBasis: "calc(100% / 2)",
  maxWidth: "calc(100% / 2)",
});

const QuarterWidthItem = styled(Grid)({
  flexBasis: "calc(100% / 4)",
  maxWidth: "calc(100% / 4)",
});

const SixWidthItem = styled(Grid)({
  flexBasis: "calc(100% / 6)",
  maxWidth: "calc(100% / 6)",
});

const ThirdWidthItem = styled(Grid)({
  flexBasis: "calc(100% / 3)",
  maxWidth: "calc(100% / 3)",
});

const App: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* カスタムスタイルで24分割を再現 */}
      <FullWidthItem item>
        <Paper>Full Width (24/24)</Paper>
      </FullWidthItem>
      <HalfWidthItem item>
        <Paper>Half Width (12/24)</Paper>
      </HalfWidthItem>
      <QuarterWidthItem item>
        <Paper>Quarter Width (6/24)</Paper>
      </QuarterWidthItem>
      <QuarterWidthItem item>
        <Paper>Quarter Width (6/24)</Paper>
      </QuarterWidthItem>
      <ThirdWidthItem item>
        <Paper>One Third Width (8/24)</Paper>
      </ThirdWidthItem>
      <ThirdWidthItem item>
        <Paper>Two Thirds Width (8/24)</Paper>
      </ThirdWidthItem>
      <ThirdWidthItem item>
        <Paper>Two Thirds Width (8/24)</Paper>
      </ThirdWidthItem>
      <ThirdWidthItem item>
        <Paper>Two Thirds Width (8/24)</Paper>
      </ThirdWidthItem>
      <HalfWidthItem item>
        <Paper>Half Width (12/24)</Paper>
      </HalfWidthItem>
      <SixWidthItem item>
        <Paper> Width (4/24)</Paper>
      </SixWidthItem>
    </Grid>
  );
};

export default App;
