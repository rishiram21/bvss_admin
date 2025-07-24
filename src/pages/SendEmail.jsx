import React, { useState } from 'react';

const SendEmail = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState('All');

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle push notification logic here
    alert('Notification Sent!');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Send Push Notification</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Top Row: Image and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input 
              type="file" 
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Notification Title"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Notification Description"
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
            required
          />
        </div>

        {/* Select Customer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer *</label>
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="All">All</option>
            <option value="Customer 1">Customer 1</option>
            <option value="Customer 2">Customer 2</option>
            {/* Add more options dynamically if needed */}
          </select>
        </div>

        {/* Image Preview */}
        <div className="mt-4">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="h-24 w-24 object-cover rounded border"
            />
          ) : (
            <div className="h-24 w-24 flex items-center justify-center border rounded text-gray-400 text-xs">
              NO IMAGE AVAILABLE
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
        >
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
