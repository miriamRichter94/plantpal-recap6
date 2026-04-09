import { mutate, SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

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
  const router = useRouter();

  async function handleDeletePlant(id) {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Plant sucessfully deleted!");
      await mutate("/api/plants");
      router.push("/");
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} handleDeletePlant={handleDeletePlant} />
      </SWRConfig>
    </>
  );
}
