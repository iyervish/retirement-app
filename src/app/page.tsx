"use client";

import TypewriterText from './components/TypewriterText';
import HeroCarousel from './components/HeroCarousel';
import { useState } from 'react';
import Image from 'next/image';
import { Users, Award, Clock, Calculator, BarChart3, Goal, Shield, PieChart, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const features = [
    {
      icon: Calculator,
      title: "Personalized Calculations",
      description: "Get precise retirement dates based on your income, expenses, savings rate, and investment returns.",
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Growth Projections",
      description: "See how your savings will grow over time with realistic market projections and compound interest.",
      color: "accent"
    },
    {
      icon: Goal,
      title: "Goal Setting",
      description: "Set specific retirement goals and track your progress with clear milestones and actionable steps.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Understand your risk tolerance and optimize your investment strategy for long-term success.",
      color: "accent"
    },
    {
      icon: PieChart,
      title: "Portfolio Analysis",
      description: "Analyze your current investments and get recommendations for better asset allocation.",
      color: "primary"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Receive timely notifications about market changes and opportunities to optimize your plan.",
      color: "accent"
    }
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % features.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + features.length) % features.length);
  };


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="logo-text text-3xl">RetireWise</span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#how-it-works" className="body-text hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="body-text hover:text-primary transition-colors">Pricing</a>
              <a href="#about" className="body-text hover:text-primary transition-colors">About</a>
              <a href="/get-started" className="btn-primary">Get Started</a>
            </div>
            <div className="md:hidden">
              <a href="/get-started" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 container-wide text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="hero-text text-white leading-tight">
              Turn Your Early Retirement{" "}
              <TypewriterText 
                initialText="Dream" 
                finalText="Reality" 
              />{" "}
              into Success
            </h1>
            <p className="body-large text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get personalized retirement planning from certified financial professionals. Expert guidance tailored to your unique situation and goals.
            </p>
            <div className="flex justify-center pt-4">
              <a href="/get-started" className="btn-primary text-center px-8 py-4 text-lg">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="section-large bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-20">
            <div className="flex-1">
              <h2 className="h1-text mb-6">Everything You Need to Retire Smart</h2>
              <p className="body-large text-gray-600 max-w-3xl">
                Our comprehensive platform provides all the tools and insights you need to plan, track, and achieve your retirement goals with confidence.
              </p>
            </div>
            <div className="flex items-center space-x-3 ml-8">
              <button 
                onClick={prevCard}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous card"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button 
                onClick={nextCard}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next card"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 40}%)` }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="w-2/5 flex-shrink-0 px-3">
                    <div className="card text-center h-full p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="mb-8">
                        <div className={`w-20 h-20 mx-auto mb-6 ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-2xl flex items-center justify-center`}>
                          <IconComponent size={40} className={feature.color === 'primary' ? 'text-primary' : 'text-accent'} />
                        </div>
                      </div>
                      <h3 className="h2-text mb-6">{feature.title}</h3>
                      <p className="body-large text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCardIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="section-large bg-white">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">Your personalized retirement plan</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12">
              <p className="body-large text-gray-600 mb-8">
                Ready to create your personalized retirement strategy? Our expert financial planners will guide you through a quick assessment to build your custom retirement roadmap.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-12 mb-8">
              <h3 className="h2-text mb-6">Start Your Retirement Journey</h3>
              <p className="body-text text-gray-600 mb-8">
                Answer a few questions about your financial situation and goals, then connect with our certified planners for your personalized strategy.
              </p>

              <a
                href="/get-started"
                className="btn-primary px-12 py-4 text-xl font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-block"
              >
                Begin Assessment
              </a>

              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-gray-500">Simple Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-gray-500">Minutes to Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24</div>
                  <div className="text-sm text-gray-500">Hours to Your Plan</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Free consultation • No obligation • Certified financial planners
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">How we work together to plan your retirement</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our certified financial planners provide personalized guidance, not generic advice. Get expert support tailored to your unique situation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center relative">
                    <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-fugaz-one), cursive, system-ui, sans-serif' }}>1</span>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="h2-text mb-4">Personal consultation</h3>
                  <p className="body-large text-gray-600 leading-relaxed">
                    Start with a free consultation where we analyze your current situation and create a personalized retirement timeline based on your real numbers.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center relative">
                    <span className="text-2xl font-bold text-accent" style={{ fontFamily: 'var(--font-fugaz-one), cursive, system-ui, sans-serif' }}>2</span>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-accent/30 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="h2-text mb-4">Expert guidance</h3>
                  <p className="body-large text-gray-600 leading-relaxed">
                    Work with certified financial planners to optimize your retirement strategy. Get professional recommendations tailored to your goals and risk tolerance.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-fugaz-one), cursive, system-ui, sans-serif' }}>3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="h2-text mb-4">Complete retirement strategy</h3>
                  <p className="body-large text-gray-600 leading-relaxed">
                    Receive a comprehensive retirement plan with actionable steps, investment recommendations, and a clear roadmap to achieve your retirement goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">Simple, transparent pricing</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              One-time comprehensive retirement planning service. Pay once and receive your complete personalized retirement strategy.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card card-large text-center bg-white border border-primary/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              
              <div className="mb-8">
                <div className="text-6xl font-bold text-primary mb-4">$500</div>
                <div className="text-xl text-gray-600 mb-2">per $1 million in assets</div>
                <div className="text-sm text-gray-500">One-time comprehensive service</div>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h3 className="h3-text text-primary mb-4">What&apos;s included:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Personalized retirement plan</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Comprehensive financial analysis</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Detailed retirement roadmap</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Tax optimization strategies</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="h3-text text-primary mb-4">Additional benefits:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Estate planning consultation</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Investment portfolio review</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Written retirement plan document</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="body-text">Educational resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a href="/get-started" className="btn-primary px-12 py-4 text-lg font-semibold">
                  Get Started Today
                </a>
                <div className="text-sm text-gray-500">
                  No setup fees • One-time payment • 30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-large" style={{backgroundColor: 'var(--forest-green-700)'}}>
        <div className="container-wide">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-16">
              <blockquote className="h1-text mb-8 text-white leading-relaxed">
                &ldquo;Working with my financial planner completely changed my retirement outlook. I found out I could retire 3 years earlier than I thought, and the personalized recommendations made all the difference.&rdquo;
              </blockquote>
              <cite className="body-large text-white opacity-90">
                — Sarah M., Teacher, Age 42
              </cite>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users size={48} className="text-white mr-3" />
                  <div className="text-3xl font-bold text-white">500+</div>
                </div>
                <div className="body-text text-white opacity-90">Clients served by certified planners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock size={48} className="text-white mr-3" />
                  <div className="text-3xl font-bold text-white">15</div>
                </div>
                <div className="body-text text-white opacity-90">Years of average experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award size={48} className="text-white mr-3" />
                  <div className="text-3xl font-bold text-white">CFP®</div>
                </div>
                <div className="body-text text-white opacity-90">Certified Financial Planner professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="h1-text mb-6">Common questions</h2>
              <p className="body-large text-gray-600">
                We know working with a financial planner can feel intimidating. Here are answers to the questions we hear most often about our service.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="h2-text mb-4">How is this different from online calculators?</h3>
                <p className="body-text text-gray-600">
                  Online calculators give generic answers. Our certified financial planners analyze your complete financial picture and create a personalized strategy that accounts for your unique situation, goals, and risk tolerance.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">What if I&apos;m behind on savings?</h3>
                <p className="body-text text-gray-600">
                  That&apos;s exactly why you need professional guidance. Our planners will work with you to create a realistic plan to get back on track, with specific steps tailored to your situation.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">Do I need to be wealthy to work with a planner?</h3>
                <p className="body-text text-gray-600">
                  Not at all. Our planners work with clients at all income levels. The key is having a plan, regardless of your current savings amount.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">What if my situation is complicated?</h3>
                <p className="body-text text-gray-600">
                  Complex situations are exactly what certified financial planners excel at. We handle multiple income sources, business ownership, real estate, tax planning, and estate considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-large bg-gradient-to-br from-primary to-primary-light">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="h1-text text-white mb-6 leading-tight">Ready to work with a certified financial planner?</h2>
              <p className="body-large text-white mb-8 opacity-95">
                Start with a free consultation to discuss your retirement goals. No obligation, no pressure - just expert guidance to help you plan your future.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Free consultation with certified financial planners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Personalized retirement strategy tailored to your goals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Complete retirement strategy and implementation guide</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <a href="/get-started" className="btn-accent px-8 py-4 text-lg font-semibold">
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/ready.png" 
                    alt="Ready to work with a certified financial planner" 
                    className="w-full h-full object-cover"
                    width={400}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="logo-text text-2xl">RetireWise</span>
            </div>
            <div className="flex space-x-8">
              <a href="#privacy" className="body-text text-gray-600 hover:text-primary transition-colors">Privacy</a>
              <a href="#terms" className="body-text text-gray-600 hover:text-primary transition-colors">Terms</a>
              <a href="#contact" className="body-text text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="body-text text-gray-500">
              © 2024 RetireWise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
