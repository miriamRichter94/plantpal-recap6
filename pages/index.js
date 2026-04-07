import useSWR from "swr";

export default function HomePage() {
  const { data: plants, isLoading } = useSWR("/api/plants");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!plants) {
    return;
  }

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant._id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}
