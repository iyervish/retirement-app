'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface QuestionData {
  age?: string;
  income?: string;
  currentSavings?: string;
  monthlyInvestment?: string;
  retirementGoal?: string;
  riskTolerance?: string;
}

const questions = [
  {
    id: 'age',
    title: 'What\'s your current age?',
    subtitle: 'This helps us calculate your retirement timeline',
    type: 'number',
    placeholder: '35',
    min: 18,
    max: 100
  },
  {
    id: 'income',
    title: 'What\'s your annual income?',
    subtitle: 'We\'ll use this to calculate your savings potential',
    type: 'currency',
    placeholder: '$75,000'
  },
  {
    id: 'currentSavings',
    title: 'How much do you currently have saved for retirement?',
    subtitle: 'Include 401k, IRA, and other retirement accounts',
    type: 'currency',
    placeholder: '$50,000'
  },
  {
    id: 'monthlyInvestment',
    title: 'How much can you invest monthly?',
    subtitle: 'This includes 401k contributions and other investments',
    type: 'currency',
    placeholder: '$500'
  },
  {
    id: 'retirementGoal',
    title: 'What\'s your retirement goal?',
    subtitle: 'Choose the option that best describes your retirement vision',
    type: 'radio',
    options: [
      { value: 'early', label: 'Early retirement (before 60)' },
      { value: 'traditional', label: 'Traditional retirement (60-67)' },
      { value: 'late', label: 'Work longer, retire comfortably (after 67)' },
      { value: 'unsure', label: 'I\'m not sure yet' }
    ]
  },
  {
    id: 'riskTolerance',
    title: 'How do you feel about investment risk?',
    subtitle: 'This helps us recommend the right investment strategy',
    type: 'radio',
    options: [
      { value: 'conservative', label: 'Conservative - I prefer stability over growth' },
      { value: 'moderate', label: 'Moderate - I want balanced growth and stability' },
      { value: 'aggressive', label: 'Aggressive - I want maximum growth potential' },
      { value: 'unsure', label: 'I\'m not sure what\'s right for me' }
    ]
  }
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionData>({});
  const router = useRouter();

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue === '') return '';

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(numericValue));
  };

  const handleInputChange = (field: string, value: string) => {
    if (questions[currentStep].type === 'currency') {
      const formatted = formatCurrency(value);
      setAnswers(prev => ({ ...prev, [field]: formatted }));
    } else {
      setAnswers(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to sign-up page
      router.push('/get-started/auth');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id as keyof QuestionData];
  const isAnswered = currentAnswer && currentAnswer.trim() !== '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <span className="logo-text text-3xl">RetireWise</span>
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {questions.length}
          </div>
        </div>
      </nav>

      {/* Question Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 mt-16">
            <h1 className="h1-text mb-4">{currentQuestion.title}</h1>
            <p className="body-large text-gray-600">{currentQuestion.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {currentQuestion.type === 'number' && (
              <input
                type="number"
                value={currentAnswer || ''}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                min={currentQuestion.min}
                max={currentQuestion.max}
                className="w-full px-6 py-4 text-2xl text-center border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
            )}

            {currentQuestion.type === 'currency' && (
              <input
                type="text"
                value={currentAnswer || ''}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full px-6 py-4 text-2xl text-center border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                autoFocus
              />
            )}

            {currentQuestion.type === 'radio' && (
              <div className="space-y-4">
                {currentQuestion.options?.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-start space-x-4 p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={currentAnswer === option.value}
                      onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                      className="mt-1 text-primary focus:ring-primary"
                    />
                    <span className="body-text flex-1">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex items-center justify-center space-x-2 px-16 py-4 disabled:opacity-50 disabled:cursor-not-allowed min-w-[240px] whitespace-nowrap bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            >
              <span>{currentStep === questions.length - 1 ? 'Continue to Sign Up' : 'Next'}</span>
              <ChevronRight size={20} />
            </button>
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
                  <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
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