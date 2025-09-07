import TypewriterText from './components/TypewriterText';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
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
              <a href="#get-started" className="btn-primary">Get Started</a>
            </div>
            <div className="md:hidden">
              <button className="btn-primary">Get Started</button>
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
              <a href="#calculator" className="btn-primary text-center px-8 py-4 text-lg">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="section-large bg-white">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">Your personalized retirement plan</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Work with certified financial planners to create a comprehensive retirement strategy tailored to your unique situation, goals, and timeline.
            </p>
          </div>
          
          <div className="visual-placeholder visual-showcase h-[600px] w-full mb-16">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-xl font-semibold">Personalized Retirement Planning</div>
              <div className="text-sm mt-2 opacity-75">Work with certified financial planners to create your custom plan</div>
            </div>
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
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <rect x="4" y="4" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="8" y="8" width="16" height="2" fill="currentColor"/>
                    <rect x="8" y="12" width="12" height="1" fill="currentColor"/>
                    <rect x="8" y="15" width="14" height="1" fill="currentColor"/>
                    <rect x="8" y="18" width="10" height="1" fill="currentColor"/>
                    <circle cx="22" cy="20" r="2" fill="currentColor"/>
                    <rect x="8" y="22" width="16" height="1" fill="currentColor"/>
                    <rect x="8" y="25" width="12" height="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="h2-text mb-4">Personal consultation</h3>
              <p className="body-text text-gray-600">
                Start with a free consultation where we analyze your current situation and create a personalized retirement timeline based on your real numbers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-accent">
                    <path d="M4 24 L12 16 L20 20 L28 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="16" r="2" fill="currentColor"/>
                    <circle cx="20" cy="20" r="2" fill="currentColor"/>
                    <circle cx="28" cy="8" r="2" fill="currentColor"/>
                    <path d="M26 6 L30 10 M30 6 L26 10" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <h3 className="h2-text mb-4">Expert guidance</h3>
              <p className="body-text text-gray-600">
                Work with certified financial planners to optimize your retirement strategy. Get professional recommendations tailored to your goals and risk tolerance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                    <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="6" y="4" width="20" height="4" rx="1" fill="currentColor"/>
                    <rect x="8" y="12" width="3" height="2" fill="currentColor"/>
                    <rect x="13" y="12" width="3" height="2" fill="currentColor"/>
                    <rect x="18" y="12" width="3" height="2" fill="currentColor"/>
                    <rect x="23" y="12" width="3" height="2" fill="currentColor"/>
                    <rect x="8" y="16" width="3" height="2" fill="currentColor"/>
                    <rect x="13" y="16" width="3" height="2" fill="currentColor"/>
                    <rect x="18" y="16" width="3" height="2" fill="currentColor"/>
                    <rect x="23" y="16" width="3" height="2" fill="currentColor"/>
                    <rect x="8" y="20" width="3" height="2" fill="currentColor"/>
                    <rect x="13" y="20" width="3" height="2" fill="currentColor"/>
                    <rect x="18" y="20" width="3" height="2" fill="currentColor"/>
                    <rect x="23" y="20" width="3" height="2" fill="currentColor"/>
                    <circle cx="21" cy="14" r="1.5" fill="#FFB627"/>
                  </svg>
                </div>
              </div>
              <h3 className="h2-text mb-4">Complete retirement strategy</h3>
              <p className="body-text text-gray-600">
                Receive a comprehensive retirement plan with actionable steps, investment recommendations, and a clear roadmap to achieve your retirement goals.
              </p>
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
                <a href="#calculator" className="btn-primary px-12 py-4 text-lg font-semibold">
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
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="body-text text-white opacity-90">Clients served by certified planners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="body-text text-white opacity-90">Years of combined experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">CFP®</div>
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
                <a href="#calculator" className="btn-accent px-8 py-4 text-lg font-semibold">
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="visual-placeholder visual-showcase h-80 w-full">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-4">🤝</div>
                    <div className="text-lg font-semibold mb-2">Financial Planning Consultation</div>
                    <div className="text-sm opacity-75">Work with certified professionals</div>
                  </div>
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
