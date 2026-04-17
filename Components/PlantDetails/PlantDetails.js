import styled from "styled-components";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import Image from "next/image";
import PlantModal from "../PlantForm/PlantModal";
import PlantForm from "../PlantForm/PlantForm";
import NavActionBar from "../NavActionBar/NavActionBar";
import { ToolTip } from "../StyledComponents/StyledComponents";

const numberWaterNeed = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const numberLightNeed = {
  "Full Shade": 1,
  "Partial Shade": 2,
  "Full Sun": 3,
};

const fertiliserSeasonIcons = {
  Spring: "🌸",
  Summer: "☀️",
  Autumn: "🍂",
  Winter: "❄️",
};

export default function PlantDetails({
  plant,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
  showModal,
  setShowModal,
}) {
  return (
    <>
      {showModal && (
        <PlantModal onClose={() => setShowModal(false)}>
          <PlantForm plant={plant} onCancel={() => setShowModal(false)} />
        </PlantModal>
      )}

      <PlantInfoContainer>
        <BotanicalName>
          <strong>Botanical Name:</strong> {plant.botanicalName}
        </BotanicalName>

        <StyledImage
          src={plant.imageUrl}
          alt={`${plant.name} Image`}
          width={180}
          height={280}
        />

        <PlantNeedsWrapper>
          <PlantNeedsTitle>Water Needs:</PlantNeedsTitle>
          <ScoreDisplay
            value={numberWaterNeed[plant.waterNeed]}
            max={3}
            ActiveIcon={NeedsWaterCircle}
            InactiveIcon={NeedsWaterCircleInactive}
          />
        </PlantNeedsWrapper>

        <PlantNeedsWrapper>
          <PlantNeedsTitle>Light Needs:</PlantNeedsTitle>
          <ScoreDisplay
            value={numberLightNeed[plant.lightNeed]}
            max={3}
            ActiveIcon={NeedsLightCircle}
            InactiveIcon={NeedsLightCircleInactive}
          />
        </PlantNeedsWrapper>

        <PlantNeedsWrapper>
          <PlantNeedsTitle>Fertiliser Season:</PlantNeedsTitle>
          <FertilizerWrapper>
            {plant.fertiliserSeason.map((item, index) => (
              <FertiliserSeasonIcon key={index}>
                {fertiliserSeasonIcons[item]}

                <ToolTip>{item}</ToolTip>
              </FertiliserSeasonIcon>
            ))}
          </FertilizerWrapper>
        </PlantNeedsWrapper>

        <PlantDescriptionContainer>
          <DescriptionTitle>Plant Description:</DescriptionTitle>
          <PlantDescription>{plant.description}</PlantDescription>
        </PlantDescriptionContainer>
      </PlantInfoContainer>

      <NavActionBar
        onShowForm={() => setShowModal(true)}
        plantId={plant._id}
        handleToggleBookmarkPlant={handleToggleBookmarkPlant}
        bookmarkedPlants={bookmarkedPlants}
      />
    </>
  );
}

const PlantInfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 10px;
  color: var(--text-color);
  padding: 0 10px;
  max-width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(5, auto);
  }
`;

const BotanicalName = styled.p`
  grid-column: 1 / -1;
  place-self: center;
  font-size: 1.2em;

  @media (min-width: 900px) {
    font-size: 1.5em;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 600px) {
    grid-row: 2 / 5;
    grid-column: 2 / -1;
    max-height: 55vh;
    object-fit: contain;
  }
`;

const PlantNeedsWrapper = styled.div`
  min-width: 0;
`;

const PlantNeedsTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 20px;
`;

const FertilizerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
`;

const NeedsWaterCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(90, 151, 231);
`;

const NeedsWaterCircleInactive = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(181, 207, 240);
`;

const NeedsLightCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(223, 190, 45);
`;

const NeedsLightCircleInactive = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(243, 233, 187);
`;

const FertiliserSeasonIcon = styled.div`
  height: 20px;
  width: 20px;
  font-size: 1.5rem;

  &:hover ${ToolTip} {
    top: -60px;
    opacity: 1;
  }
`;

const PlantDescriptionContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  min-width: 0;
`;

const DescriptionTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const PlantDescription = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;
