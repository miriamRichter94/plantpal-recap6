import { useRouter } from "next/router";
import PlantDetails from "@/Components/PlantDetails/PlantDetails";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("(`/api/plants/${id}`", `/api/plants/${id}`);

  const {
    data: plant,
    isLoading,
    error,
  } = useSWR(id ? `/api/plants/${id}` : null);

  if (isLoading || !plant) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return <PlantDetails plant={plant} />;
}
