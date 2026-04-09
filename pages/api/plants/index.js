import dbConnect from "@/db/dbConnect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plant.find();

    response.status(200).json(plants);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
