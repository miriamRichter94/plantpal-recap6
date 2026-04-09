import PlantForm from "@/Components/PlantForm/PlantFormModal";
import PlantList from "@/Components/PlantList/PlantList";

export default function HomePage({ plants }) {
  return (
    <>
      <h1>Plant Pal</h1>
      <PlantForm />
      <PlantList plants={plants} />
    </>
  );
}
