import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FilteredProducts = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const gender = searchParams.get("gender") || "";
    const age = searchParams.get("age") || "";
    const occasion = searchParams.get("occasion") || "";
    const budget = searchParams.get("budget") || "";

    setFilters({ gender, age, occasion, budget });

    const fetchFilteredProducts = async () => {
      try {
        const res = await axios.get(`/api/products/filter${location.search}`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching filtered products", err);
      }
    };

    fetchFilteredProducts();
  }, [location.search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Filtered Products</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                {filters.gender && <span>{filters.gender} • </span>}
                {filters.age && <span>{filters.age} • </span>}
                {filters.occasion && <span>{filters.occasion}</span>}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default FilteredProducts;
