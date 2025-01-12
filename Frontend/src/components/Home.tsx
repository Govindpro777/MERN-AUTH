import React from 'react';
import { Navigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Home = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <User className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Welcome, {user.name}!</h1>
        <p className="text-gray-600 text-center">
          You are successfully logged in to your account.
        </p>
      </div>
    </div>
  );
};

export default Home;