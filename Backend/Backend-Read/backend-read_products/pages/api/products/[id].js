// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect.js";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log("id", id);

  if (request.method === "GET") {
    const product = await Product.findById(id);
    console.log(product);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
