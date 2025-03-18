import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement actual login logic here
    console.log('Logging in with:', email);
    // Redirect or update authentication state
  };
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-black border border-gray-800 p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className='text-amber-500'>Welcome </span><span className="text-amber-500">Back</span>
        </h1>
        
        <p className="text-gray-400 text-center mb-8">
          Sign in to access your account and premium services
        </p>
        
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-sm py-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
          
          {/* Password Input */}
          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-sm py-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
          
          {/* Forgot Password Link */}
          <div className="flex justify-end mb-4">
            <a href="#" className="text-amber-500 hover:text-amber-400 text-sm">
              Forgot Password?
            </a>
          </div>
          
          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-sm flex items-center justify-center transition-colors"
          >
            <LogIn size={18} className="mr-2" />
            Sign In
          </button>
        </form>
        
        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account?
            <a 
              href="/register" 
              className="ml-1 text-amber-500 hover:text-amber-400"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;