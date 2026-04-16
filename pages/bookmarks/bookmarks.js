import PlantList from "@/Components/PlantList/PlantList";
import NavActionBar from "@/Components/NavActionBar/NavActionBar";
import Header from "@/Components/Header/Header";
import {
  EmptyResult,
  PageWrapper,
} from "@/Components/StyledComponents/StyledComponents";

export default function Bookmarks({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  const bookmarkedPlantsData = plants.filter(
    (plant) => bookmarkedPlants.includes(plant._id) && plant
  );
  return (
    <PageWrapper>
      <Header>Bookmarked Plants</Header>
      {bookmarkedPlantsData.length === 0 ? (
        <EmptyResult>
          No Bookmarked Plants found. Bookmark some Plants!
        </EmptyResult>
      ) : (
        <PlantList
          plants={bookmarkedPlantsData}
          handleToggleBookmarkPlant={handleToggleBookmarkPlant}
          bookmarkedPlants={bookmarkedPlants}
        />
      )}

      <NavActionBar
        onShowForm={() => setShowModal(true)}
        onDeletePlant
        plantId={""}
        handleToggleBookmarkPlant={handleToggleBookmarkPlant}
        bookmarkedPlants={bookmarkedPlants}
      />
    </PageWrapper>
  );
}
