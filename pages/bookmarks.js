import PlantList from "@/Components/PlantList/PlantList";
import Link from "next/link";

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
      <h1>Bookmarked Plants</h1>
      <Link href="/">Back To Plant List</Link>
      {bookmarkedPlantsData.length === 0 ? (
        <p>No Bookmarked Plants found</p>
      ) : (
        <PlantList
          plants={bookmarkedPlantsData}
          handleToggleBookmarkPlant={handleToggleBookmarkPlant}
          bookmarkedPlants={bookmarkedPlants}
        />
      )}
    </>
  );
}
