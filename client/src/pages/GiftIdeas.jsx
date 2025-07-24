import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GiftIdeas = () => {
  const [filters, setFilters] = useState({
    gender: "",
    age: "",
    occasion: "",
    budget: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const queryString = new URLSearchParams(filters).toString();
    navigate(`/filtered-products?${queryString}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Find the Perfect Gift
      </h1>
      <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Gender Filter */}
        <div className="p-6 bg-white shadow-md rounded-lg w-52 text-center">
          <img
            src="/icons/them_small.png"
            alt="Gender"
            className="mx-auto w-12 h-12 mb-3"
          />
          <h2 className="text-lg font-semibold mb-2">Gender</h2>
          <div className="space-y-2">
            {["Them", "Her", "Him", "Unisex"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 justify-center"
              >
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={filters.gender === option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Age Filter */}
        <div className="p-6 bg-white shadow-md rounded-lg w-52 text-center">
          <img
            src="/icons/adult_small.png"
            alt="Age"
            className="mx-auto w-12 h-12 mb-3"
          />
          <h2 className="text-lg font-semibold mb-2">Age</h2>
          <div className="space-y-2">
            {["Kids", "Teen", "Adult", "Senior"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 justify-center"
              >
                <input
                  type="radio"
                  name="age"
                  value={option}
                  checked={filters.age === option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Occasion Filter */}
        <div className="p-6 bg-white shadow-md rounded-lg w-52 text-center">
          <img
            src="/icons/easter_small.png"
            alt="Occasion"
            className="mx-auto w-12 h-12 mb-3"
          />
          <h2 className="text-lg font-semibold mb-2">Occasion</h2>
          <div className="space-y-2">
            {[
              "Easter",
              "Birthday",
              "Wedding",
              "Anniversary"
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 justify-center"
              >
                <input
                  type="radio"
                  name="occasion"
                  value={option}
                  checked={filters.occasion === option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <select
            className="border p-2 rounded mt-2 w-full"
            name="occasion"
            value={filters.occasion} // Ensure the select reflects the state
            onChange={handleChange}
          >
            <option value="">Other (Select one)</option>
            <option value="Valentine">Valentine</option>
            <option value="New Year">New Year</option>
            <option value="Diwali">Diwali</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Graduation">Graduation</option>
            <option value="Christmas">Christmas</option>
            <option value="Navratri">Navratri</option>
          </select>
        </div>

        {/* Budget Filter */}
        <div className="p-6 bg-white shadow-md rounded-lg w-52 text-center">
          <img
            src="/icons/price_small.png"
            alt="Budget"
            className="mx-auto w-12 h-12 mb-3"
          />
          <h2 className="text-lg font-semibold mb-2">Budget</h2>
          <input
            type="number"
            name="budget"
            placeholder="Enter Budget"
            value={filters.budget}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Find Gifts Button */}
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          onClick={handleSubmit}
        >
          Find Gifts 🎁
        </button>
      </div>
    </div>
  );
};

export default GiftIdeas;