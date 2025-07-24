import React from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      {user ? (
        <>
          <p className="text-lg">Welcome, {user.name}!</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-lg text-gray-600">Please log in to access your profile.</p>
      )}
    </div>
  );
};

export default Profile;
