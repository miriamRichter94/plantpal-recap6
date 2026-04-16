import Filter from "@/Components/Filter/Filter";
import PlantModal from "@/Components/PlantForm/PlantModal";
import PlantForm from "@/Components/PlantForm/PlantForm";
import PlantList from "@/Components/PlantList/PlantList";
import { useState } from "react";
import SearchBar from "@/Components/SearchBar/SearchBar";
import NavActionBar from "@/Components/NavActionBar/NavActionBar";
import Header from "@/Components/Header/Header";
import styled from "styled-components";
import {
  EmptyResult,
  PageWrapper,
} from "@/Components/StyledComponents/StyledComponents";

export default function HomePage({
  plants,
  handleToggleBookmarkPlant,
  bookmarkedPlants,
  showModal,
  setShowModal,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [plantToEdit, setPlantToEdit] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = plants
    .filter((plant) =>
      selectedFilter ? plant.lightNeed === selectedFilter : true
    )
    .filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  function handleSetPlantToEdit(plant) {
    setPlantToEdit(plant);
  }

  return (
    <PageWrapper>
      <Header>Plant Pal</Header>

      {showModal && (
        <PlantModal onClose={() => setShowModal(false)}>
          <PlantForm plant={plantToEdit} onCancel={() => setShowModal(false)} />
        </PlantModal>
      )}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {filteredPlants.length === 0 ? (
        <EmptyResult>No plants found</EmptyResult>
      ) : (
        <PlantList
          plants={filteredPlants}
          handleToggleBookmarkPlant={handleToggleBookmarkPlant}
          bookmarkedPlants={bookmarkedPlants}
          setShowModal={setShowModal}
          onSetPlantToEdit={handleSetPlantToEdit}
        />
      )}
      <NavActionBar
        onShowForm={() => {
          setShowModal(true);
          setPlantToEdit(undefined);
        }}
      />
    </PageWrapper>
  );
}
