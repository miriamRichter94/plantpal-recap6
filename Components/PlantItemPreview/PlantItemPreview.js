import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export default function PlantListItem({ plant }) {
  return (
    <StyledLink href={`/plant-details/${plant._id}`}>
      <ImageWrapper>
        <StyledImage
          $imageAvailible={!!plant.imageUrl}
          src={plant.imageUrl || "/assets/no-image.png"}
          alt={`Picture of a ${plant.name}`}
        />
      </ImageWrapper>
      <TextWrapper>
        <p>
          <span>Name: </span>
          <span>{plant.name}</span>
        </p>
        <p>
          <span>Botanical Name: </span>
          <span>{plant.botanicalName}</span>
        </p>
      </TextWrapper>
    </StyledLink>
  );
}
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ $imageAvailible }) =>
    !$imageAvailible &&
    css`
      opacity: 30%;
    `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TextWrapper = styled.div`
  padding: 8px;
  overflow: hidden;
  p {
    margin: 4px 0;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
