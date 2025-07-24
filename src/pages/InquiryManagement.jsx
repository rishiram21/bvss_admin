import { MessageSquare, Clock, CheckCircle, AlertCircle, Search, Filter } from 'lucide-react';

const InquiryManagement = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Inquiry Management</h1>
        <p className="text-gray-600">Handle customer inquiries and support requests</p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Inquiries</p>
              <p className="text-2xl font-bold text-gray-800">15</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <MessageSquare className="text-white" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Clock className="text-white" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Urgent</p>
              <p className="text-2xl font-bold text-gray-800">2</p>
            </div>
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertCircle className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side: Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search inquiries..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>

          {/* Right side: Add Inquiry Button */}
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Add Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder for inquiry table/list */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500 text-center">Inquiry list will be displayed here...</p>
      </div>
    </div>
  );
};

export default InquiryManagement;
