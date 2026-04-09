import PlantList from "@/Components/PlantList/PlantList";
import useSWR from "swr";
import { Toaster } from "react-hot-toast";

export default function HomePage({handleDeletePlant}) {
  const { data: plants, isLoading, error, mutate } = useSWR("/api/plants");

  if (isLoading || !plants) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <>
      <h1>Plant Pal</h1>
      <Toaster position="top-center" />
      <PlantList plants={plants} handleDeletePlant={handleDeletePlant} />
    </>
  );
}
