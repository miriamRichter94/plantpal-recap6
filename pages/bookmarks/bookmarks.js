import PlantList from "@/Components/PlantList/PlantList";
import NavActionBar from "@/Components/NavActionBar/NavActionBar";
import Header from "@/Components/Header/Header";

export default function Bookmarks({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  const bookmarkedPlantsData = plants.filter(
    (plant) => bookmarkedPlants.includes(plant._id) && plant
  );
  return (
    <>
      <Header>Bookmarked Plants</Header>
      {bookmarkedPlantsData.length === 0 ? (
        <p>No Bookmarked Plants found</p>
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
    </>
  );
}
