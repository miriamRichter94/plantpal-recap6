import styled, { css } from "styled-components";
import PlantListItem from "../PlantItemPreview/PlantItemPreview";

export default function PlantList({ plants = [], handleDeletePlant }) {
  return (
    <PlantGrid>
      {plants.length !== 0 ? (
        plants.map((plant) => (
          <GridItem key={plant._id}>
            <StyledButton
              onClick={() => handleDeletePlant(plant._id)}
              $isDelete
            >
              ❌
            </StyledButton>
            <PlantListItem plant={plant} />
          </GridItem>
        ))
      ) : (
        <p> No Items Found</p>
      )}
    </PlantGrid>
  );
}

const PlantGrid = styled.ul`
  list-style: none;
  position: relative;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-around;
  align-content: center;
  row-gap: 20px;
  column-gap: 16px;
`;

const StyledButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 1;
  padding: 0;
  border-radius: 20%;
  border: 1px solid black;
  background: white;
  opacity: 20%;
  ${({ $isDelete }) =>
    $isDelete &&
    css`
      right: 5px;
    `}
  &:focus-within {
    opacity: 100%;
  }
`;

const GridItem = styled.li`
  position: relative;
  justify-items: center;
  padding: 10px;

  &:hover ${StyledButton} {
    opacity: 100%;
  }
`;
