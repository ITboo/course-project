import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800 text-center">
      <Helmet>
        <title>Not Found - FormCraft</title>
      </Helmet>
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Sorry, but seems like such page doesn't exist.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Main
      </button>
      
    </div>
  );
};

export default NotFoundPage;