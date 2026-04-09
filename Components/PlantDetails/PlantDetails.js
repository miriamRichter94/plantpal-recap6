import styled from "styled-components";

import Image from "next/image";

export default function PlantDetails({ plant }) {
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

  return (
    <PageContainer>
      <PlantName>{plant.name}</PlantName>
      <PlantInfoContainer>
        <LeftContainer>
          <BotanicalName>{plant.botanicalName}</BotanicalName>
          <PlantInfoTitle>Water Needs:</PlantInfoTitle>
          <NeedsContainer>
            {[...Array(numberWaterNeed[plant.waterNeed])].map((_, index) => (
              <NeedsWaterCircle key={index} />
            ))}
            {[...Array(3 - numberWaterNeed[plant.waterNeed])].map(
              (_, index) => (
                <NeedsWaterCircleInactive key={index} />
              )
            )}
          </NeedsContainer>
          <PlantInfoTitle>Light Needs:</PlantInfoTitle>
          <NeedsContainer>
            {[...Array(numberLightNeed[plant.lightNeed])].map((_, index) => (
              <NeedsLightCircle key={index} />
            ))}
            {[...Array(3 - numberLightNeed[plant.lightNeed])].map(
              (_, index) => (
                <NeedsLightCircleInactive key={index} />
              )
            )}
          </NeedsContainer>

          <PlantInfoTitle>Fertiliser Season:</PlantInfoTitle>
          <NeedsContainer>
            {plant.fertiliserSeason.map((item, index) => {
              switch (item) {
                case "Spring":
                  return (
                    <FertiliserSeasonIcon key={index}>🌸</FertiliserSeasonIcon>
                  );
                case "Summer":
                  return (
                    <FertiliserSeasonIcon key={index}>☀️</FertiliserSeasonIcon>
                  );
                case "Autumn":
                  return (
                    <FertiliserSeasonIcon key={index}>🍂</FertiliserSeasonIcon>
                  );
                case "Winter":
                  return (
                    <FertiliserSeasonIcon key={index}>❄️</FertiliserSeasonIcon>
                  );
              }
            })}
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
