import styled from "styled-components";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import Image from "next/image";
import PlantModal from "../PlantForm/PlantModal";
import PlantForm from "../PlantForm/PlantForm";
import NavActionBar from "../NavActionBar/NavActionBar";

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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 10px;
  color: var(--text-color);
`;

const BotanicalName = styled.p`
  grid-column: 1 / -1;
  place-self: center;
  font-size: 1.2em;

  @media (min-width: 900px) {
    font-size: 1.5em;
  }
`;

const StyledImage = styled(Image)`
  grid-row: 2 / 5;
  grid-column: 2/-1;
`;

const PlantNeedsWrapper = styled.div`
  padding-left: 10px;
`;

const PlantNeedsTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
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
`;

const PlantDescriptionContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  grid-column: 1 / -1;
  margin-left: 30px;
  margin-right: 30px;
`;

const DescriptionTitle = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

const PlantDescription = styled.p``;
