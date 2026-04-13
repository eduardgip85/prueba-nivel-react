import { products } from "../data/products";
import type { Product } from "../types/product";

export function useProducts(): { products: Product[] } {
    return { products };
}