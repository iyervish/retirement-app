'use client';

import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Calendar,
  ArrowUpRight,
  Settings,
  Bell,
  User
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Mock data for the dashboard
const mockData = {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    age: 35,
    retirementAge: 65,
    currentSalary: 85000,
    yearsToRetirement: 30
  },
  portfolio: {
    totalValue: 245000,
    monthlyContribution: 1200,
    annualReturn: 7.2,
    riskLevel: 'Moderate'
  },
  goals: {
    retirementTarget: 1500000,
    currentProgress: 16.3,
    monthlyNeeded: 1800,
    onTrack: true
  },
  performance: {
    ytdReturn: 12.4,
    monthlyReturn: 2.1,
    totalReturn: 18.7
  },
  assetAllocation: [
    { name: 'Stocks', value: 60, color: '#1B4332' },
    { name: 'Bonds', value: 25, color: '#FFB627' },
    { name: 'Real Estate', value: 10, color: '#2D5A42' },
    { name: 'Cash', value: 5, color: '#FFD23F' }
  ],
  monthlyPerformance: [
    { month: 'Jan', value: 220000, contribution: 1200 },
    { month: 'Feb', value: 225000, contribution: 1200 },
    { month: 'Mar', value: 232000, contribution: 1200 },
    { month: 'Apr', value: 228000, contribution: 1200 },
    { month: 'May', value: 235000, contribution: 1200 },
    { month: 'Jun', value: 242000, contribution: 1200 },
    { month: 'Jul', value: 238000, contribution: 1200 },
    { month: 'Aug', value: 245000, contribution: 1200 }
  ],
  retirementProjection: [
    { age: 35, value: 245000 },
    { age: 40, value: 420000 },
    { age: 45, value: 650000 },
    { age: 50, value: 920000 },
    { age: 55, value: 1250000 },
    { age: 60, value: 1620000 },
    { age: 65, value: 2050000 }
  ]
};

export default function Dashboard() {

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="logo-text text-3xl">RetireWise</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary">
              <Settings size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{mockData.user.name}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 mt-8">
          <h1 className="h1-text mb-2">Welcome back, {mockData.user.name}!</h1>
          <p className="body-large text-gray-600">
            Here&apos;s your personalized retirement planning dashboard
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#1B4332' }}>
                <DollarSign className="text-white" size={24} />
              </div>
              <div className="flex items-center text-[#1B4332]">
                <ArrowUpRight size={16} />
                <span className="text-sm font-medium ml-1">+{formatPercentage(mockData.performance.ytdReturn)}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockData.portfolio.totalValue)}
            </h3>
            <p className="text-sm text-gray-600">Total Portfolio Value</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFB627' }}>
                <Target className="text-white" size={24} />
              </div>
              <div className="flex items-center text-[#1B4332]">
                <span className="text-sm font-medium">{formatPercentage(mockData.goals.currentProgress)}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockData.goals.retirementTarget)}
            </h3>
            <p className="text-sm text-gray-600">Retirement Goal</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#1B4332' }}>
                <TrendingUp className="text-white" size={24} />
              </div>
              <div className="flex items-center text-[#1B4332]">
                <ArrowUpRight size={16} />
                <span className="text-sm font-medium ml-1">+{formatPercentage(mockData.performance.monthlyReturn)}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {formatCurrency(mockData.portfolio.monthlyContribution)}
            </h3>
            <p className="text-sm text-gray-600">Monthly Contribution</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFB627' }}>
                <Calendar className="text-white" size={24} />
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-sm font-medium">{mockData.user.yearsToRetirement} years</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {mockData.user.retirementAge}
            </h3>
            <p className="text-sm text-gray-600">Retirement Age</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Portfolio Performance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#1B4332' }}></div>
                  <span className="text-sm text-gray-600">Portfolio Value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB627' }}></div>
                  <span className="text-sm text-gray-600">Contributions</span>
                </div>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData.monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    formatter={(value, name) => [
                      formatCurrency(Number(value)), 
                      name === 'value' ? 'Portfolio Value' : 'Contribution'
                    ]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1B4332" 
                    fill="#1B4332" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Asset Allocation</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData.assetAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {mockData.assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {mockData.assetAllocation.map((asset, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: asset.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{asset.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{asset.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retirement Projection */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Retirement Projection</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.retirementProjection}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="age" 
                  stroke="#6b7280"
                  label={{ value: 'Age', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  stroke="#6b7280" 
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip 
                  formatter={(value) => [formatCurrency(Number(value)), 'Projected Value']}
                  labelFormatter={(label) => `Age: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#1B4332" 
                  strokeWidth={3}
                  dot={{ fill: '#1B4332', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#1B4332', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Retirement Readiness</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress to Goal</span>
                  <span className="font-medium">{formatPercentage(mockData.goals.currentProgress)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${mockData.goals.currentProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: mockData.goals.onTrack ? '#1B4332' : '#FFB627' }}
                  ></div>
                  <span className="text-sm font-medium">
                    {mockData.goals.onTrack ? 'On Track' : 'Needs Attention'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {mockData.goals.onTrack
                    ? 'You\'re on track to meet your retirement goals!'
                    : 'Consider increasing your monthly contributions.'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Year-to-Date Return</span>
                <span className="text-sm font-medium text-green-600">
                  +{formatPercentage(mockData.performance.ytdReturn)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Monthly Return</span>
                <span className="text-sm font-medium text-green-600">
                  +{formatPercentage(mockData.performance.monthlyReturn)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Return</span>
                <span className="text-sm font-medium text-green-600">
                  +{formatPercentage(mockData.performance.totalReturn)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps - Dedicated Row */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-gray-900">🎯 Recommended Next Steps</h4>
              <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Action Required
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Take these actions to optimize your retirement strategy and stay on track to meet your goals.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="group flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ backgroundColor: '#1B4332' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Review your asset allocation</h5>
                  <p className="text-sm text-gray-600">Ensure your portfolio is properly diversified for your risk tolerance</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-accent/30 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ backgroundColor: '#FFB627' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">Consider increasing contributions</h5>
                  <p className="text-sm text-gray-600">Boost your monthly savings to reach retirement goals faster</p>
                </div>
                <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ backgroundColor: '#1B4332' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Schedule a consultation</h5>
                  <p className="text-sm text-gray-600">Meet with a certified financial planner for personalized advice</p>
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>View All Recommendations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1B4332', marginTop: '150px' }}>
        <div className="container mx-auto px-8" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <span className="logo-text text-2xl mb-8 block text-white" style={{ color: 'white' }}>RetireWise</span>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Your trusted partner in retirement planning. We help you build a secure financial future with personalized strategies and expert guidance.
              </p>
              <div className="flex space-x-6">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col justify-start">
              <h4 className="font-semibold text-white mb-8 text-lg">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Retirement Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Investment Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Financial Goals
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col justify-start">
              <h4 className="font-semibold text-white mb-8 text-lg">Support</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-20 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 RetireWise. All rights reserved.
              </p>
              <div className="flex items-center space-x-8 mt-6 md:mt-0">
                <span className="text-sm text-gray-300">
                  Secured by 256-bit SSL encryption
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">System Status: Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
