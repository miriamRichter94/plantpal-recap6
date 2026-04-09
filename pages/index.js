import PlantForm from "@/Components/PlantForm/PlantFormModal";
import PlantList from "@/Components/PlantList/PlantList";
import useSWR from "swr";

export default function HomePage() {
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  if (isLoading || !plants) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <>
      <h1>Plant Pal</h1>
      <PlantForm />
      <PlantList plants={plants} />
    </>
  );
}
