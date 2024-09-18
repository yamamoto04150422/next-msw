import styled from "styled-components";

export interface GridProps {
  $columns: string;
  $tabletColumns?: string;
  $gap: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  gap: ${(props) => props.$gap};

  /* タブレット用のレイアウト */
  @media (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.$tabletColumns ||
      props.$columns}; /* タブレット用のカラム設定、なければPC用を適用 */
  }
`;

interface GridItemProps {
  $column: string;
  $tabletColumn?: string;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${(props) => props.$column};
  display: flex;
  align-items: center;

  /* タブレット用のアイテム配置 */
  @media (max-width: 768px) {
    grid-column: ${(props) =>
      props.$tabletColumn ||
      props.$column}; /* タブレット用のカラム設定、なければPC用を適用 */
  }
`;
