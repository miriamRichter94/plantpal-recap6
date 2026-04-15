import styled, { css } from "styled-components";
import PlantListItem from "../PlantItemPreview/PlantItemPreview";
import DeleteConfirmationModal from "../DeleteConfirmation/DeleteConfirmationModal";
import BookMark from "../BookMark/BookMark";
import Image from "next/image";

export default function PlantList({
  plants = [],
  handleToggleBookmarkPlant,
  bookmarkedPlants,
  setShowModal,
  onSetPlantToEdit,
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
            <ActionDiv $isEdit>
              <StyledButton
                onClick={() => {
                  setShowModal(true);
                  onSetPlantToEdit(plant);
                }}
              >
                <Image
                  src="/assets/pencil.png"
                  width={25}
                  height={25}
                  alt="Edit Pencil"
                ></Image>
              </StyledButton>
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
  padding: 0;
  border-radius: 20%;
  border: 1px solid black;
  background: white;
  bottom: 5px;

  &:hover {
    box-shadow: 2px 2px 2px grey;
  }

  ${({ $isDelete }) =>
    $isDelete &&
    css`
      right: 5px;
    `}

  ${({ $isEdit }) =>
    $isEdit &&
    css`
      right: 45px;
    `}

    ${({ $isBookmark }) =>
    $isBookmark &&
    css`
      right: 85px;
    `}
`;

const GridItem = styled.li`
  position: relative;
  background-color: var(--background-plant-card);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  height: 320px; /* fixed total card height */
  overflow: hidden;

  .dark-mode & {
    box-shadow: 5px 5px 5px var(--plant-card-box-shadow);
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
  padding: 0;
  cursor: pointer;
`;
