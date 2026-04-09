import dbConnect from "@/db/dbConnect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const plant = await Plant.findById(id);

      if (!plant) return response.status(400).json({ status: "bad request" });
      return response.status(200).json(plant);
    } catch (error) {
      return response.status(400).json({ status: "bad request" });
    }
  }
  response.status(405).json({ status: "Method not allowed." });
}
