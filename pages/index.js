import PlantList from "@/Components/PlantList/PlantList";

export default function HomePage({plants}) {
  return (
    <>
      <h1>Plant Pal</h1>
      <PlantList plants={plants} />
    </>
  );
}
