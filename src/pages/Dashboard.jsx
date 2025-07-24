import { 
  Calendar,
  CheckCircle,
  AlertCircle,
  Store,
  UserCheck,
  Activity,
  Users
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: "Today's Bookings", 
      value: "0", 
      icon: Calendar, 
      color: "bg-blue-500",
      textColor: "text-blue-600"
    },
    { 
      title: "Ongoing Bookings", 
      value: "1", 
      icon: Activity, 
      color: "bg-yellow-500",
      textColor: "text-yellow-600"
    },
    { 
      title: "Total Bikes", 
      value: "7", 
      icon: Activity, 
      color: "bg-red-500",
      textColor: "text-red-600"
    },
    { 
      title: "Total Bookings", 
      value: "9", 
      icon: CheckCircle, 
      color: "bg-green-500",
      textColor: "text-green-600"
    },
    { 
      title: "Total Users", 
      value: "2", 
      icon: Users, 
      color: "bg-cyan-500",
      textColor: "text-cyan-600"
    },
    { 
      title: "Total Verified Users", 
      value: "1", 
      icon: UserCheck, 
      color: "bg-emerald-500",
      textColor: "text-emerald-600"
    },
    { 
      title: "Total Unverified Users", 
      value: "1", 
      icon: AlertCircle, 
      color: "bg-amber-500",
      textColor: "text-amber-600"
    },
    { 
      title: "Total Stores", 
      value: "9", 
      icon: Store, 
      color: "bg-pink-500",
      textColor: "text-pink-600"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to BVSS Admin Panel</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                <stat.icon size={24} />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-3">{stat.title}</div>
            <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg transition-colors text-sm font-medium">
              View All
            </button>
          </div>
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-600">New user registration</p>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Booking confirmed</p>
              <span className="text-xs text-gray-400">4 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Inquiry received</p>
              <span className="text-xs text-gray-400">6 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 font-medium transition-colors">
              Add New User
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-green-600 font-medium transition-colors">
              Send Email
            </button>
            <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-yellow-600 font-medium transition-colors">
              View Inquiries
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-600 font-medium transition-colors">
              Manage Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;