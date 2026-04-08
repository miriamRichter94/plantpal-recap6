import PlantList from "@/Components/PlantList/PlantList";
import { useRouter } from "next/router";

export default function HomePage({ plants }) {
  const router = useRouter();

  async function handleDeletePlant(id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <h1>Plant Pal</h1>
      <PlantList plants={plants} handleDeletePlant={handleDeletePlant} />
    </>
  );
}
