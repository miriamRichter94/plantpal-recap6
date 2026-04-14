import styled, { css } from "styled-components";
import PlantListItem from "../PlantItemPreview/PlantItemPreview";
import DeleteConfirmationModal from "../DeleteConfirmation/DeleteConfirmationModal";
import BookMark from "../BookMark/BookMark";

export default function PlantList({
  plants = [],
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  return (
    <PlantGrid>
      {plants.length !== 0 ? (
        plants.map((plant) => (
          <GridItem key={plant._id}>
            <ActionDiv $isDelete>
              <DeleteConfirmationModal plantId={plant._id}>
                ❌
              </DeleteConfirmationModal>
            </ActionDiv>
            <ActionDiv $isBookmark>
              <BookMark
                onToggleBookmarkPlant={handleToggleBookmarkPlant}
                bookmarkedPlants={bookmarkedPlants}
                plantId={plant._id}
              />
            </ActionDiv>

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
  column-gap: 32px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, minmax(200px, 1fr));
  }
`;

const ActionDiv = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 1;
  padding: 0;
  border-radius: 20%;
  border: 1px solid black;
  background: white;
  @media (min-width: 1024px) {
    opacity: 20%;
  }
  ${({ $isDelete }) =>
    $isDelete &&
    css`
      right: 5px;
    `}

  ${({ $isBookmark }) =>
    $isBookmark &&
    css`
      right: 5px;
      top: 45px;
    `}

  &:focus-within {
    opacity: 100%;
  }
`;

const GridItem = styled.li`
  position: relative;
  background-color: #fafaf7;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 320px; /* fixed total card height */
  overflow: hidden;

  &:hover ${ActionDiv} {
    opacity: 100%;
  }
`;
