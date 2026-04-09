import Filter from "@/Components/Filter/Filter";
import PlantForm from "@/Components/PlantForm/PlantFormModal";
import PlantList from "@/Components/PlantList/PlantList";
import { useState } from "react";
import useSWR from "swr";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  if (isLoading || !plants) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  const filteredPlants = selectedFilter
    ? plants.filter((plant) => plant.lightNeed === selectedFilter)
    : plants;

  return (
    <>
      <h1>Plant Pal</h1>

      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <PlantList plants={filteredPlants} />
      <PlantForm />
    </>
  );
}
