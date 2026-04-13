import Image from "next/image";
import styled from "styled-components";

export default function BookMark({
  onToggleIsBookmarked,
  isBookmarked,
  plantId,
}) {
  return (
    <StyledButton onClick={() => onToggleIsBookmarked(plantId)}>
      <Image
        src={
          isBookmarked.includes(plantId)
            ? "/assets/leafFilled.png"
            : "/assets/leafUnfilled.png"
        }
        width={25}
        height={25}
        alt="Bookmark the plant"
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
