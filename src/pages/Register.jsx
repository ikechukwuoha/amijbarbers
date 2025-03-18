import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Implement actual registration logic here
    console.log('Registering with:', name, email);
    // Redirect or update authentication state
  };
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-black border border-gray-800 p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className='text-amber-500'>Create</span> <span className="text-amber-500">Account</span>
        </h1>
        
        <p className="text-gray-400 text-center mb-8">
          Join us today and access all our premium services
        </p>
        
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <User size={18} />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-sm py-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
          
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
          
          {/* Confirm Password Input */}
          <div className="relative mb-4">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-gray-900 border border-gray-800 rounded-sm py-3 pl-10 pr-3 text-white placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
          
          {/* Terms and Conditions */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              required
              className="mr-2 h-4 w-4 accent-amber-500"
            />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I agree to the <a href="#" className="text-amber-500 hover:text-amber-400">Terms of Service</a> and <a href="#" className="text-amber-500 hover:text-amber-400">Privacy Policy</a>
            </label>
          </div>
          
          {/* Register Button */}
          <button 
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-sm flex items-center justify-center transition-colors"
          >
            <ArrowRight size={18} className="mr-2" />
            Create Account
          </button>
        </form>
        
        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?
            <a 
              href="/login" 
              className="ml-1 text-amber-500 hover:text-amber-400"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;