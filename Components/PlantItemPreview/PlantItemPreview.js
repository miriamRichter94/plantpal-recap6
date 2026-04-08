import Image from "next/image";
import styled, { css } from "styled-components";

export default function PlantListItem({ plant }) {
  return (
    <PlantCard>
      <StyledImage
        $imageAvailible={!!plant.imageUrl}
        src={plant.imageUrl || "/assets/no-image.png"}
        width={200}
        height={250}
        alt={`Picture of a ${plant.name}`}
      />
      <p>Name: {plant.name}</p>
      <p>Botanical Name: {plant.botanicalName}</p>
    </PlantCard>
  );
}

const StyledImage = styled(Image)`
  ${({ $imageAvailible }) =>
    !$imageAvailible &&
    css`
      opacity: 50%;
      width: 200px;
      height: 200px;
    `}
`;

const PlantCard = styled.div`
  position: relative;
  overflow: hidden;
`;
