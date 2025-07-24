import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="images"
          className={({ isActive }) =>
            `px-4 py-2 rounded ${
              isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`
          }
        >
          Images
        </NavLink>
      </div>

      {/* Display Child Route Component */}
      <div className="bg-white p-4 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
