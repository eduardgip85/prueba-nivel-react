import type { Product } from "../types/product";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts"; 

const ProductList = () => {
    const { products } = useProducts();
    
    return (
        <section className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductList