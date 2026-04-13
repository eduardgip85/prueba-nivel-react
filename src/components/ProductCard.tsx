import { Link } from "react-router-dom"
import type { Product } from "../types/product"

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
            View Details
        </Link>
    </div>
  )
}

export default ProductCard