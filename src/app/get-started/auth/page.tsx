'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function Auth() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up
      console.log('Sign up:', formData);
      alert('Welcome to RetireWise! Your account has been created successfully.');
      // Redirect to dashboard after successful signup
      router.push('/dashboard');
    } else {
      // Handle sign in
      console.log('Sign in:', { email: formData.email, password: formData.password });
      alert('Welcome back! You have been signed in successfully.');
      // Redirect to dashboard after successful signin
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <span className="logo-text text-3xl">RetireWise</span>
          <div className="text-sm text-gray-500">
            Almost there!
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-16">
            <h1 className="h1-text mb-4">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="body-large text-gray-600">
              {isSignUp
                ? 'Join RetireWise to get your personalized retirement plan'
                : 'Sign in to access your retirement planning dashboard'
              }
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {isSignUp ? 'Create Account & Get My Plan' : 'Sign In'}
              </button>
            </form>

            {/* Toggle between sign up and sign in */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary hover:text-primary-light font-medium"
                >
                  {isSignUp ? 'Sign in here' : 'Sign up here'}
                </button>
              </p>
            </div>

            {/* Terms and Privacy */}
            {isSignUp && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our{' '}
                  <a href="#terms" className="text-primary hover:text-primary-light">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#privacy" className="text-primary hover:text-primary-light">Privacy Policy</a>.
                </p>
              </div>
            )}
          </div>

          {/* Benefits reminder */}
          <div className="mt-8 bg-primary/5 rounded-xl p-6">
            <h3 className="h3-text mb-4 text-center">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="body-text">Our certified financial planners review your information</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="body-text">We create your personalized retirement strategy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="body-text">You receive your complete retirement roadmap within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}