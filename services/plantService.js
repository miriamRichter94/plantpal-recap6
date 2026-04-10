import { mutate } from "swr";
import toast from "react-hot-toast";

export async function deletePlant(id) {
  const response = await fetch(`/api/plants/${id}`, { method: "DELETE" });

  if (response.ok) {
    await mutate("/api/plants");
    toast.success("Plant successfully deleted!");
  } else {
    toast.error("Failed to delete plant.");
  }
}
