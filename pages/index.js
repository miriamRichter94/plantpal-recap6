import Filter from "@/Components/Filter/Filter";
import PlantModal from "@/Components/PlantForm/PlantModal";
import PlantForm from "@/Components/PlantForm/PlantForm";
import PlantList from "@/Components/PlantList/PlantList";
import { useState } from "react";

import NavActionBar from "@/Components/NavActionBar/NavActionBar";

export default function HomePage({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
  showModal,
  setShowModal,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [plantToEdit, setPlantToEdit] = useState(undefined);

  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.lightNeed === selectedFilter)
    : plants;

  function handleSetPlantToEdit(plant) {
    setPlantToEdit(plant);
  }

  return (
    <>
      <h1>Plant Pal</h1>

      {showModal && (
        <PlantModal onClose={() => setShowModal(false)}>
          <PlantForm plant={plantToEdit} onCancel={() => setShowModal(false)} />
        </PlantModal>
      )}

      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <PlantList
        plants={filteredPlants}
        handleToggleBookmarkPlant={handleToggleBookmarkPlant}
        bookmarkedPlants={bookmarkedPlants}
        setShowModal={setShowModal}
        onSetPlantToEdit={handleSetPlantToEdit}
      />
      <NavActionBar
        onShowForm={() => {
          setShowModal(true);
          setPlantToEdit(undefined);
        }}
      />
    </>
  );
}
