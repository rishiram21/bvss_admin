import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import InquiryManagement from './pages/InquiryManagement';
import SendEmail from './pages/SendEmail';
import Content from './pages/Content';
import Blog from './pages/Blog';
import Images from './pages/Images';
import ContactManagement from './pages/ContactManagement';

// Layout
import AdminLayout from './components/AdminLayout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginForm onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <AdminLayout onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          {/* Admin Panel Pages */}
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="inquiries" element={<InquiryManagement />} />
          <Route path="send-email" element={<SendEmail />} />
          <Route path="contacts" element={<ContactManagement />} />

          {/* Content Management Pages */}
          <Route path="content" element={<Content />} />
          <Route path="content/blog" element={<Blog />} />
          <Route path="content/images" element={<Images />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
