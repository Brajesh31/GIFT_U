import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/useAuth";

const Header = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (location.hash === "#footer") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header className="flex justify-between items-center p-4 bg-cyan-400 shadow-md font-bold">
      <div className="text-xl font-bold">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      <nav className="flex space-x-6 items-center">
        <Link to="/products">Products</Link>
        <Link to="/gift-ideas">Gift Ideas</Link>
        <a href="#footer" onClick={scrollToFooter}>About Us</a>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="flex space-x-4 items-center">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {user ? (
          <Link to="/profile">
            <FaUserCircle className="text-2xl" title="Profile" />
          </Link>
        ) : (
          <Link to="/login" className="px-4 py-1 bg-white text-cyan-600 border border-cyan-600 rounded-md hover:bg-cyan-500 hover:text-white transition">
            Login
          </Link>
        )}
        {user?.isAdmin && (
  <Link to="/admin/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-500">
    Admin Dashboard
  </Link>
)}
<Link to="/admin/login" className="text-sm text-blue-500 hover:underline ml-4">
  Admin Login
</Link>


      </div>
    </header>
  );
};

export default Header;
