// LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLitigantSignIn = () => {
    navigate('/auth/signin'); // Update with the actual route for litigant sign-in
  };

  const handleAdvocateSignIn = () => {
    navigate('/auth/signin'); // Update with the actual route for advocate sign-in
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">
          Welcome to the Legal Support Platform
        </h1>
        <p className="text-lg">Choose your role to sign in</p>

        <div className="space-x-4">
          <button
            onClick={handleLitigantSignIn}
            className="px-6 py-3 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign in as Litigant
          </button>
          <button
            onClick={handleAdvocateSignIn}
            className="px-6 py-3 bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign in as Advocate
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
