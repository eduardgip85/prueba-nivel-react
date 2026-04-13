import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();

    const product = products.find(p => p.id === parseInt(productId!));
    const navigate = useNavigate();
    
    return (
        <section className='flex justify-center gap-6 p-4 flex-col items-center'>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            

            <button className="cursor-pointer hover:bg-sky-700 px-3 py-2 bg-sky-500 rounded-xl" onClick={() => navigate(-1)}>Go Back</button>
        </section>
    )
}

export default ProductDetail