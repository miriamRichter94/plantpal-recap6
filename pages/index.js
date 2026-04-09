import PlantList from "@/Components/PlantList/PlantList";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function HomePage({ plants, mutate }) {
  const router = useRouter();

  async function handleDeletePlant(id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Plant sucessfully deleted!");
      mutate(); // revalidates the list
      setTimeout(() => router.push("/"), 2000);
    }
  }

  return (
    <>
      <h1>Plant Pal</h1>
      <Toaster position="top-center" />
      <PlantList plants={plants} handleDeletePlant={handleDeletePlant} />
    </>
  );
}
