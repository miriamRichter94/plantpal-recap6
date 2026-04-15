import Filter from "@/Components/Filter/Filter";
import PlantModal from "@/Components/PlantForm/PlantModal";
import PlantForm from "@/Components/PlantForm/PlantForm";
import PlantList from "@/Components/PlantList/PlantList";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import SearchBar from "@/Components/SearchBar/SearchBar";
import NavActionBar from "@/Components/NavActionBar/NavActionBar";

export default function HomePage({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = plants
    .filter((plant) =>
      selectedFilter ? plant.lightNeed === selectedFilter : true
    )
    .filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <h1>Plant Pal</h1>

      {showModal && (
        <PlantModal onClose={() => setShowModal(false)}>
          <PlantForm onCancel={() => setShowModal(false)} />
        </PlantModal>
      )}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {filteredPlants.length === 0 ? (
        <p>No plants found</p>
      ) : (
        <PlantList
          plants={filteredPlants}
          handleToggleBookmarkPlant={handleToggleBookmarkPlant}
          bookmarkedPlants={bookmarkedPlants}
        />
      )}
      <NavActionBar onShowForm={() => setShowModal(true)} />
    </>
  );
}
