
// import React from "react";

// const ProductCard = ({ product, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-cover rounded-md"
//       />
//       <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//       <p className="text-gray-600">${product.price}</p>
//     </div>
//   );
// };

// export default ProductCard;



// import React from "react";

// const ProductCard = ({ product }) => {
//   const getBadge = () => {
//     switch (product.addedBy) {
//       case "admin":
//         return <span className="text-yellow-500 text-sm">👑 Admin</span>;
//       case "seller":
//         return <span className="text-green-500 text-sm">🛍️ Seller</span>;
//       case "moderator":
//         return <span className="text-blue-500 text-sm">🧑‍💼 Moderator</span>;
//       default:
//         return <span className="text-gray-500 text-sm">🙋 User</span>;
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
//       <img
//         src={product.image || "/placeholder.jpg"}
//         alt={product.name}
//         className="w-full h-40 object-cover rounded-md"
//       />
//       <div className="flex justify-between items-center mt-2">
//         <h3 className="text-lg font-semibold">{product.name}</h3>
//         {getBadge()}
//       </div>
//       <p className="text-gray-600">${product.price ?? "N/A"}</p>
//     </div>
//   );
// };

// export default ProductCard;


import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // ✅ Create a navigate function

  const handleClick = () => {
    navigate(`/products/${product._id}`); // ✅ Navigate to product detail
  };

  const getBadge = () => {
    switch (product.addedBy) {
      case "admin":
        return <span className="text-yellow-500 text-sm">👑 Admin</span>;
      case "seller":
        return <span className="text-green-500 text-sm">🛍️ Seller</span>;
      case "moderator":
        return <span className="text-blue-500 text-sm">🧑‍💼 Moderator</span>;
      default:
        return <span className="text-gray-500 text-sm">🙋 User</span>;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={product.image || "/placeholder.jpg"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {getBadge()}
      </div>
      <p className="text-gray-600">${product.price ?? "N/A"}</p>
    </div>
  );
};

export default ProductCard;
