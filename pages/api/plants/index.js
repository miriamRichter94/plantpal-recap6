import dbConnect from "@/db/dbConnect";
import Plant from "@/db/models/Plant";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const plants = await Plant.find({}).sort({ _id: -1 });
    return res.status(200).json(plants);
  }

  if (req.method === "POST") {
    try {
      const plant = await Plant.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(405).end();
}
