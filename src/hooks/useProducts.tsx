import { products } from "../data/products";
import type { Product } from "../types/product";

export function useProducts() {
    const getAllProducts = (): Product[] => products;

    const getProductById = (id: number): Product | undefined =>
    products.find((product) => product.id === id);

    return {
        products,
        getAllProducts,
        getProductById,
    };
}