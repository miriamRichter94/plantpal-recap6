import styled from "styled-components";
import PlantListItem from "../PlantItemPreview/PlantItemPreview";

export default function PlantList({ plants }) {
  return (
    <PlangGrid>
      {plants.length !== 0 ? (
        plants.map((plant) => (
          <GridItem key={plant._id}>
            <PlantListItem plant={plant} />
          </GridItem>
        ))
      ) : (
        <p> No Items Found</p>
      )}
    </PlangGrid>
  );
}

const PlangGrid = styled.ul`
  list-style: none;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-around;
  align-content: center;
  row-gap: 20px;
  column-gap: 16px;
`;

const GridItem = styled.li`
  position: relative;
  justify-items: center;
  padding: 10px;
`;
