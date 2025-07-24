import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full mx-auto">
<section 
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/HomePage.jpg')",
           backgroundColor: '#f5f5f5'
        }}
      >
        <div className="p-8">
          <h2 className="text-5xl font-bold">
            Find the Perfect Gift for Everyone
          </h2>
          <p className="text-black-800 mt-2 font-bold">
            Discover unique and thoughtful gift ideas tailored to every
            occasion. Let us help you make every celebration memorable!
          </p>
          <div className="mt-4 space-x-4">
            {/* Explore button navigates to Products page */}
            <Link to="/products">
              <button className="px-6 py-2 bg-black text-white rounded">
                Explore
              </button>
            </Link>
            {/* Sign Up button navigates to Signup page */}
            <Link to="/signup">
            <button className="px-6 py-2 border border-black rounded transition duration-300 hover:bg-black hover:text-white">Sign Up</button>
            </Link>
          </div>
          <div className="mt-6 w-full flex justify-center items-center">
            <span className="w-full rounded-lg shadow-md">
              <img
                src="/images/homeImage.jpg"
                alt="gift"
                className="w-full h-100 object-center rounded-lg shadow-md"
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
