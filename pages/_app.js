import useSWR, { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { Toaster } from "react-hot-toast";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const [bookmarkedPlants, setBookmarkedPlants] = useLocalStorageState(
    "isBookmarked",
    {
      defaultValue: [],
    }
  );
  const { data: plants, isLoading, error } = useSWR("/api/plants", fetcher);

  if (isLoading || !plants) return <h1>Loading...</h1>;
  if (error) return <h1>ERROR</h1>;

  function handleToggleBookmarkPlant(id) {
    if (!bookmarkedPlants.includes(id)) {
      setBookmarkedPlants([...bookmarkedPlants, id]);
    } else {
      setBookmarkedPlants(
        bookmarkedPlants.filter((bookmarkedId) => bookmarkedId != id)
      );
    }
  }

  return (
    <>
      <GlobalStyle />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          plants={plants}
          handleToggleBookmarkPlant={handleToggleBookmarkPlant}
          bookmarkedPlants={bookmarkedPlants}
        />
      </SWRConfig>
    </>
  );
}
