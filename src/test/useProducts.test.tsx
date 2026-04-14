import { describe, it, expect } from 'vitest';
import { useProducts } from '../hooks/useProducts';

describe('useProducts', () => {
    it('should return an object with products property', () => {
        const result = useProducts();
        expect(result).toHaveProperty('products');
    });

    it("should return all products through getAllProducts", () => {
        const { getAllProducts } = useProducts();
        const allProducts = getAllProducts();

        expect(Array.isArray(allProducts)).toBe(true);
        expect(allProducts).toHaveLength(10);
        expect(allProducts[0]).toHaveProperty("id");
        expect(allProducts[0]).toHaveProperty("title");
    });   

    it("should return a product by id through getProductById", () => {
        const { getProductById } = useProducts();
        const product = getProductById(1);

        expect(product).toBeDefined();
        expect(product?.id).toBe(1);
    });

    it('should return an array of products', () => {
        const { products } = useProducts();
        expect(Array.isArray(products)).toBe(true);
    });

    it('should return 10 products', () => {
        const { products } = useProducts();
        expect(products.length).toBe(10);
    });

    it('should return products with expected structure', () => {
        const { products } = useProducts();
        if (products.length > 0) {
            products.forEach(product => {
                expect(product).toHaveProperty('id');
                expect(product).toHaveProperty('title');
                expect(product).toHaveProperty('price');
                expect(product).toHaveProperty('description');
                expect(product).toHaveProperty('image');
                expect(product).toHaveProperty('category');
            })
        }
    });

}); 