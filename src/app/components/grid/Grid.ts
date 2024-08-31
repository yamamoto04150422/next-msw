import styled from "styled-components";

export interface GridProps {
  $columns: string;
  $gap: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  gap: ${(props) => props.$gap};
`;

interface GridItemProps {
  $column: string;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${(props) => props.$column};
  display: flex;
  align-items: center;
`;
