import Filter from "@/Components/Filter/Filter";
import PlantForm from "@/Components/PlantForm/PlantModal";
import PlantList from "@/Components/PlantList/PlantList";
import Link from "next/link";
import { useState } from "react";

export default function HomePage({
  plants,
  handleToggleIsBookmarked,
  isBookmarked,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.lightNeed === selectedFilter)
    : plants;

  return (
    <>
      <h1>Plant Pal</h1>
      <PlantForm />

      <Link href="/bookmarks">To bookmarked plants</Link>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <PlantList
        plants={filteredPlants}
        handleToggleIsBookmarked={handleToggleIsBookmarked}
        isBookmarked={isBookmarked}
      />
    </>
  );
}
