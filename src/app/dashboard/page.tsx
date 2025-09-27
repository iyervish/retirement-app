'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Calendar,
  PieChart as PieChartIcon,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
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
  Cell,
  BarChart,
  Bar
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
            Here's your personalized retirement planning dashboard
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#D8F3DC' }}>
                  <span className="text-xs font-bold" style={{ color: '#1B4332' }}>1</span>
                </div>
                <span className="text-sm text-gray-600">Review your asset allocation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#FFF8DC' }}>
                  <span className="text-xs font-bold" style={{ color: '#FFB627' }}>2</span>
                </div>
                <span className="text-sm text-gray-600">Consider increasing contributions</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#D8F3DC' }}>
                  <span className="text-xs font-bold" style={{ color: '#1B4332' }}>3</span>
                </div>
                <span className="text-sm text-gray-600">Schedule a consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
