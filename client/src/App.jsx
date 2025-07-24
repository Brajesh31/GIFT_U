

// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProductDetails from "./pages/ProductDetails";
// import GiftIdeas from "./pages/GiftIdeas";
// import Wishlist from "./pages/Wishlist";
// import Profile from "./pages/Profile";
// import ProductPage from "./pages/ProductPage";
// import { WishlistProvider } from "./context/WishlistContext";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminRoute from "./routes/AdminRoute";
// import AdminLogin from "./pages/admin/AdminLogin.jsx";
// import AdminRegister from "./pages/admin/AdminRegister";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <WishlistProvider>
//       <div className="min-h-screen bg-gray-100">
//         <Header user={user} handleLogout={handleLogout} />
//         <main className="container mx-auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/login" element={<Login setUser={setUser} />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route
//               path="/profile"
//               element={<Profile user={user} handleLogout={handleLogout} />}
//             />
//             <Route path="/product/:productId" element={<ProductDetails />} />
//             <Route path="/gift-ideas" element={<GiftIdeas />} />
//             <Route path="/wishlist" element={<Wishlist />} />
//             <Route path="/filtered-products" element={<ProductPage />} />

//             <Route
//               path="/admin/dashboard"
//               element={
//                 <AdminRoute>
//                   <AdminDashboard />
//                 </AdminRoute>
//               }
//             />
//             <Route path="/admin/login" element={<AdminLogin />} />
//             <Route path="/admin/register" element={<AdminRegister />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </WishlistProvider>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Core Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import GiftIdeas from "./pages/GiftIdeas";
import FilteredProducts from "./pages/FilteredProducts";


import ProductPage from "./pages/ProductPage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";

// Route protection
import AdminRoute from "./routes/AdminRoute";

// Contexts

import AddProduct from "./pages/admin/AddProduct";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    
      <div className="min-h-screen bg-gray-100">
        <Header user={user} handleLogout={handleLogout} />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile user={user} handleLogout={handleLogout} />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/gift-ideas" element={<GiftIdeas />} />
           
            <Route path="/filtered-products" element={<FilteredProducts />} />

            <Route path="/filtered-products" element={<ProductPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/dashboard" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            <Route
  path="/admin/add-product"
  element={
    <AdminRoute>
      <AddProduct />
    </AdminRoute>
  }
/>
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
};

export default App;

