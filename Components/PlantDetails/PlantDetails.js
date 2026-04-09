import styled from "styled-components";
import Link from "next/link";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import Image from "next/image";

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

export default function PlantDetails({ plant }) {
  return (
    <PageContainer>
      <StyledLink href="/">Back</StyledLink>
      <PlantName>{plant.name}</PlantName>
      <PlantInfoContainer>
        <LeftContainer>
          <BotanicalName>{plant.botanicalName}</BotanicalName>
          <PlantInfoTitle>Water Needs:</PlantInfoTitle>
          <ScoreDisplay
            value={numberWaterNeed[plant.waterNeed]}
            max={3}
            ActiveIcon={NeedsWaterCircle}
            InactiveIcon={NeedsWaterCircleInactive}
          />

          <PlantInfoTitle>Light Needs:</PlantInfoTitle>
          <ScoreDisplay
            value={numberLightNeed[plant.lightNeed]}
            max={3}
            ActiveIcon={NeedsLightCircle}
            InactiveIcon={NeedsLightCircleInactive}
          />

          <PlantInfoTitle>Fertiliser Season:</PlantInfoTitle>
          <NeedsContainer>
            {plant.fertiliserSeason.map((item, index) => (
              <FertiliserSeasonIcon key={index}>
                {fertiliserSeasonIcons[item]}
              </FertiliserSeasonIcon>
            ))}
          </NeedsContainer>
        </LeftContainer>

        <RightContainer>
          <Image
            src={plant.imageUrl}
            alt={`${plant.name} Image`}
            width={180}
            height={280}
          />
        </RightContainer>
      </PlantInfoContainer>

      <PlantDescriptionContainer>
        <PlantInfoTitle>Plant Description:</PlantInfoTitle>
        <PlantDescription>{plant.description}</PlantDescription>
      </PlantDescriptionContainer>
    </PageContainer>
  );
}

const StyledLink = styled(Link)`
  position: absolute;
  left: 20px;
  top: 20px;

  background-color: rgb(202, 202, 202);
  border: 1px solid black;
  text-decoration: none;
  color: black;
  font-size: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const PlantName = styled.h1`
  text-decoration: underline;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BotanicalName = styled.h2`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PlantInfoTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 20px;
`;

const PlantInfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
`;

const LeftContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const NeedsContainer = styled.div`
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

const PlantDescription = styled.p``;

const PlantDescriptionContainer = styled.article`
  display: flex;
  flex-direction: column;

  justify-content: left;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
`;
