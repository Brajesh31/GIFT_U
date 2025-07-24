// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import { AuthProvider } from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
     <AuthProvider>
    <CartProvider> 
    <App />
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);
