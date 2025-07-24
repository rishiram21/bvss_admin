import React, { useState } from 'react';
import { MessageSquare, Search, Filter, Mail, Sidebar } from 'lucide-react';

const ContactManagement = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'General Inquiry',
      message: 'I need help with your services.',
      date: '2025-07-10',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Feedback',
      message: 'Great experience with your team!',
      date: '2025-07-09',
    },
  ]);

  const totalContacts = contacts.length;
  const feedbackCount = contacts.filter(c => c.subject.toLowerCase().includes('feedback')).length;
  const inquiryCount = contacts.filter(c => c.subject.toLowerCase().includes('inquiry')).length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Management</h1>
        <p className="text-gray-600">Manage user-submitted contact messages</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-800">{totalContacts}</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <MessageSquare className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Inquiries</p>
              <p className="text-2xl font-bold text-gray-800">{inquiryCount}</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Feedbacks</p>
              <p className="text-2xl font-bold text-gray-800">{feedbackCount}</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <MessageSquare className="text-white" size={24} />
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
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-600">Name</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Email</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Subject</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Message</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-800">{contact.name}</td>
                  <td className="px-6 py-4 text-blue-600">{contact.email}</td>
                  <td className="px-6 py-4">{contact.subject}</td>
                  <td className="px-6 py-4 max-w-sm truncate text-gray-700">{contact.message}</td>
                  <td className="px-6 py-4 text-gray-500">{contact.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No contact submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactManagement;
