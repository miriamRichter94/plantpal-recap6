import { useRouter } from "next/router";
import PlantDetails from "@/Components/PlantDetails/PlantDetails";
import useSWR from "swr";
import Header from "@/Components/Header/Header";

export default function DetailsPage({
  handleToggleBookmarkPlant,
  bookmarkedPlants,
  showModal,
  setShowModal,
}) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: plant,
    isLoading,
    error,
  } = useSWR(id ? `/api/plants/${id}` : null, {
    shouldRetryOnError: false,
  });

  if (isLoading || !plant) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <>
      <Header>{plant.name}</Header>
      <PlantDetails
        plant={plant}
        handleToggleBookmarkPlant={handleToggleBookmarkPlant}
        bookmarkedPlants={bookmarkedPlants}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
