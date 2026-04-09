import PlantList from "@/Components/PlantList/PlantList";
import useSWR from "swr";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function HomePage({ plants, mutate }) {
  const router = useRouter();
  const { data: plants, isLoading, error } = useSWR("/api/plants");

  if (isLoading || !plants) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

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
