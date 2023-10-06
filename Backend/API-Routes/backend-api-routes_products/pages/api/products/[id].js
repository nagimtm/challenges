import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const productId = getProductById(id);
  res.status(200).json(productId);
  res.end();
}
