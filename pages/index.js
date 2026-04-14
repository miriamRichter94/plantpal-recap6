import Filter from "@/Components/Filter/Filter";
import PlantModal from "@/Components/PlantForm/PlantModal";
import PlantForm from "@/Components/PlantForm/PlantForm";
import PlantList from "@/Components/PlantList/PlantList";
import Link from "next/link";
import { useState } from "react";

export default function HomePage({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.lightNeed === selectedFilter)
    : plants;

  return (
    <>
      <h1>Plant Pal</h1>

      <button onClick={() => setShowModal(true)}>Create Plant</button>
      {showModal && (
        <PlantModal onClose={() => setShowModal(false)}>
          <PlantForm onCancel={() => setShowModal(false)} />
        </PlantModal>
      )}
      <Link href="/bookmarks">To bookmarked plants</Link>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <PlantList
        plants={filteredPlants}
        handleToggleBookmarkPlant={handleToggleBookmarkPlant}
        bookmarkedPlants={bookmarkedPlants}
      />
    </>
  );
}
