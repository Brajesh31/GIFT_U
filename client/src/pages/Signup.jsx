import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isClicked, setIsClicked] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup Successful:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed!");
    }

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-400 transition-all" required />
          </div>

          <div className="relative">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-400 transition-all" required />
          </div>

          <div className="relative">
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-400 transition-all" required />
          </div>

          <div className="relative">
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-indigo-400 transition-all" required />
          </div>

          <button type="submit" className={`w-full py-2 mt-4 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 ${isClicked ? "bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-800"}`}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
