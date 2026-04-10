import dbConnect from "@/db/dbConnect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "DELETE") {
      await Plant.findByIdAndDelete(id);

      response.status(200).json({ message: "Sucess!" });
      return;
    }

    if (request.method === "GET") {
      const plant = await Plant.findById(id);

      if (!plant) return response.status(400).json({ status: "bad request" });
      return response.status(200).json(plant);
    }
  } catch (error) {
    response.status(500).json({ messgae: "Internal Server Error." });
    return;
  }

  response.status(405).json({ stauts: "Method not allowed." });
}
