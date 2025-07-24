import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    extraimage: '',
    gender: [],
    age: [],
    occasion: [],
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setProduct(prev => {
      const updated = checked
        ? [...prev[category], value]
        : prev[category].filter(item => item !== value);
      return { ...prev, [category]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/products', product);
      setMessage('Product added successfully!');
      setProduct({
        name: '',
        description: '',
        price: '',
        image: '',
        extraimage: '',
        gender: [],
        age: [],
        occasion: [],
      });
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add a Product</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="extraimage"
          value={product.extraimage}
          onChange={handleChange}
          placeholder="Extra Image URL"
          className="w-full border p-2 rounded"
        />

        {/* Gender Filter */}
        <div>
          <h3 className="font-semibold mb-2">Gender</h3>
          {['Male', 'Female', 'Unisex', 'Him', 'Her', 'Them'].map((option) => (
            <label key={option} className="inline-block mr-4">
              <input
                type="checkbox"
                value={option}
                checked={product.gender.includes(option)}
                onChange={(e) => handleCheckboxChange(e, 'gender')}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Age Filter */}
        <div>
          <h3 className="font-semibold mb-2">Age</h3>
          {['Kids', 'Teen', 'Adult', 'Senior'].map((option) => (
            <label key={option} className="inline-block mr-4">
              <input
                type="checkbox"
                value={option}
                checked={product.age.includes(option)}
                onChange={(e) => handleCheckboxChange(e, 'age')}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Occasion Filter */}
        <div>
          <h3 className="font-semibold mb-2">Occasion</h3>
          {[
            'Anniversary', 'Baby Shower', 'Birthday', 'Christmas', 'Diwali',
            'Easter', 'Graduation', 'Navratri', 'New Year', 'Valentine', 'Wedding'
          ].map((option) => (
            <label key={option} className="inline-block mr-4 mb-2">
              <input
                type="checkbox"
                value={option}
                checked={product.occasion.includes(option)}
                onChange={(e) => handleCheckboxChange(e, 'occasion')}
                className="mr-1"
              />
              {option}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
