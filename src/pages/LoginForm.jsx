import  { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    if (loginData.email === 'admin@gmail.com' && loginData.password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid credentials! Use admin@gmail.com and admin123');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">BVSS</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h2>
          <p className="text-gray-600">Welcome back! Please login to continue.</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Email: admin@gmail.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;