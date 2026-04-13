import PlantList from "@/Components/PlantList/PlantList";

export default function Bookmarks({
  plants,
  handleToggleIsBookmarked,
  isBookmarked,
}) {
  const bookmarkedPlants = plants.filter(
    (plant) => isBookmarked.includes(plant._id) && plant
  );
  return (
    <>
      <h1>Bookmarked Plants</h1>
      {bookmarkedPlants.length === 0 ? (
        <p>No Bookmarked Plants found</p>
      ) : (
        <PlantList
          plants={bookmarkedPlants}
          handleToggleIsBookmarked={handleToggleIsBookmarked}
          isBookmarked={isBookmarked}
        />
      )}
    </>
  );
}
