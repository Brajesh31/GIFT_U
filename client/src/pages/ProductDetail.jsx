import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);

  useEffect(() => {
    if (!product) {
      axios.get(`http://localhost:5000/api/admin/products/${id}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch product:", err);
          setLoading(false);
        });
    }
  }, [id, product]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading product...</p>;

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-xl font-semibold text-red-500">⚠ Product not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-lg shadow-md" />
          {product.extraimage && (
            <img src={product.extraimage} alt="Extra View" className="w-full h-40 object-cover rounded-lg mt-4 shadow-md" />
          )}
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-xl font-semibold mt-2">${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
