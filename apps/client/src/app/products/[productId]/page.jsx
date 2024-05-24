import { getProduct } from "@app/client/data/products";
import ProductDetail from "./ProductDetail";

const ProductPage = async ({params}) => {
  console.log(params);
  const id =params.productId;
  const product = await getProduct(params.productId)
  console.log(product)
  return <ProductDetail product={product} />
 };

export default ProductPage;
