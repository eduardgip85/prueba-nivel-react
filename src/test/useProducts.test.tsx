import { describe, it, expect } from 'vitest';
import { useProducts } from '../hooks/useProducts';

describe('useProducts', () => {
    it('should return an object with products property', () => {
        const result = useProducts();
        expect(result).toHaveProperty('products');
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