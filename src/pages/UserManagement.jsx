import React from 'react';
import { Users, UserPlus, Search, Filter } from 'lucide-react';

const UserManagement = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">User Management</h1>
        <p className="text-gray-600">Manage all users and their permissions</p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-800">2</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Verified Users</p>
              <p className="text-2xl font-bold text-gray-800">1</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Unverified Users</p>
              <p className="text-2xl font-bold text-gray-800">1</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <UserPlus size={16} />
            <span>Add New User</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User Management System</h3>
            <p className="text-gray-600 mb-6">This section will contain user management functionality including user listing, editing, verification, and role management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">User Listing</h4>
              <p className="text-sm text-blue-600">View and manage all registered users</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">User Verification</h4>
              <p className="text-sm text-green-600">Verify and approve user accounts</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">Role Management</h4>
              <p className="text-sm text-purple-600">Assign and manage user roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;