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
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="logo-text text-2xl">RetireWise</span>
            <div className="text-sm text-gray-500">
              Step {currentStep + 1} of {questions.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="h1-text mb-4">{currentQuestion.title}</h1>
            <p className="body-large text-gray-600">{currentQuestion.subtitle}</p>
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
              className="flex items-center space-x-2 btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentStep === questions.length - 1 ? 'Continue to Sign Up' : 'Next'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}