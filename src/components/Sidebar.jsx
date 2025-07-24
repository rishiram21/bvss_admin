import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  FileText,
  Mail,
  Phone,
  X,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/',
    },
    {
      id: 'user-management',
      label: 'User Management',
      icon: Users,
      path: '/users',
    },
    {
      id: 'inquiry-management',
      label: 'Inquiry Management',
      icon: MessageSquare,
      path: '/inquiries',
    },
    {
      id: 'content-management',
      label: 'Content Management',
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { id: 'blog', label: 'Blog', path: '/content/blog' },
        { id: 'images', label: 'Images', path: '/content/images' },
      ],
    },
    {
      id: 'send-email',
      label: 'Send Email',
      icon: Mail,
      path: '/send-email',
    },
    {
      id: 'contact-management',
      label: 'Contact Management',
      icon: Phone,
      path: '/contacts',
    },
  ];

  const toggleSubmenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-blue-800">
        <span className="text-white font-bold text-xl">BVSS ADMIN</span>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mt-8 px-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-2">
            {!item.hasSubmenu ? (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={20} className="mr-3" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ) : (
              <>
                <div
                  className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors cursor-pointer ${
                    location.pathname.startsWith('/content')
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                  }`}
                  onClick={() => toggleSubmenu(item.id)}
                >
                  <div className="flex items-center">
                    <item.icon size={20} className="mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {expandedMenus[item.id] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>

                {expandedMenus[item.id] && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <NavLink
                        to={subItem.path}
                        key={subItem.id}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-blue-700 text-white'
                              : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                          }`
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 bg-blue-800">
        <div className="text-center text-xs text-blue-200">
          BVSS ADMIN © 2025
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
