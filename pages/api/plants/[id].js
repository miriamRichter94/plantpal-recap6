import dbConnect from "@/db/dbConnect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      console.log(request.method);
      console.log(request);

      const plants = await Plant.findById(id);

      if (!plants) return response.status(400).json({ status: "bad request" });
      response.status(200).json(plants);
    } catch (error) {
      return response.status(400).json({ status: "bad request" });
    }
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
