import { useRouter } from "next/router";
import PlantDetails from "@/Components/PlantDetails/PlantDetails";

export default function DetailsPage({ plants, isLoading, error }) {
  if (isLoading) return <p>is Loading</p>;
  if (error) return <p>error</p>;

  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => {
    if (id === plant._id) return plant;
  });

  return <PlantDetails plant={plant} />;
}
