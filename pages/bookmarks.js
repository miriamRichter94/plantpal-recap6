import PlantList from "@/Components/PlantList/PlantList";
import Link from "next/link";

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
      <Link href="/">Back To Plant List</Link>
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
