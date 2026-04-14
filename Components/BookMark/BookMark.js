import Image from "next/image";
import styled from "styled-components";

export default function BookMark({
  onToggleBookmarkPlant,
  bookmarkedPlants,
  plantId,
}) {
  return (
    <StyledButton
      onClick={() => onToggleBookmarkPlant(plantId)}
      aria-label={
        bookmarkedPlants.includes(plantId)
          ? "Unbookmark the plant"
          : "Bookmark the plant"
      }
    >
      <Image
        src={
          bookmarkedPlants.includes(plantId)
            ? "/assets/leafFilled.png"
            : "/assets/leafUnfilled.png"
        }
        width={25}
        height={25}
        alt={
          bookmarkedPlants.includes(plantId)
            ? "Plant is not bookmarked"
            : "Plant is bookmarked"
        }
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
  padding: 0;
  cursor: pointer;
`;
