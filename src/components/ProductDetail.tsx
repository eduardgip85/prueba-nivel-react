import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { getProductById } = useProducts();

    const [product, setProduct] = useState<Product | null>(null);
    
    useEffect(() => {
        if (!productId) return;
        const foundProduct = getProductById(Number(productId));
        setProduct(foundProduct ?? null);
    }, [productId, getProductById]);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="flex justify-center gap-6 p-4 flex-col items-center text-center">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <button className="cursor-pointer hover:bg-sky-700 px-3 py-2 bg-sky-500 rounded-xl" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default ProductDetail