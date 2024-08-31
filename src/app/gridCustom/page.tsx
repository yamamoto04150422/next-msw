"use client";

import { Grid, GridItem } from "../components/grid/Grid";

const GridCustom: React.FC = () => {
  return (
    <>
      <Grid $columns="repeat(12, 1fr)" $gap="8px">
        <GridItem $column="1 / 5">
          <p style={{ fontWeight: "bold" }}>組織１</p>
        </GridItem>
        <GridItem $column="5 / 7">
          <p style={{ fontWeight: "bold" }}>機能種別</p>
        </GridItem>
        <GridItem $column="8 / 10">
          <p style={{ fontWeight: "bold" }}>製造者</p>
        </GridItem>
      </Grid>
    </>
  );
};

export default GridCustom;
