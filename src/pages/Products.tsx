import ProductList from "../components/ProductList"
import { useProducts } from "../hooks/useProducts"
import { useEffect, useState } from "react"
import type { Product } from "../types/product"

const Products = () => {
  const { getAllProducts } = useProducts();
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    setProductList(getAllProducts());
  }, [getAllProducts]);

  return <ProductList products={productList} />;
};

export default Products