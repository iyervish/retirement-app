export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="h1-text text-primary">RetireWise</span>
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
      <section className="pt-32 pb-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="hero-text leading-tight">
                  Know exactly when you can retire
                </h1>
                <p className="body-large text-gray-600 max-w-xl">
                  Get a personalized retirement timeline based on your current savings, income, and goals. No generic advice, no scary surprises - just clear answers about your future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#calculator" className="btn-primary text-center px-8 py-4 text-lg">
                  See My Retirement Date
                </a>
                <a href="#how-it-works" className="btn-secondary text-center px-8 py-4 text-lg">
                  See how it works
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl">
                {/* Large Visual Placeholder */}
                <div className="visual-placeholder visual-showcase h-96 w-full">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div>Interactive Retirement Timeline</div>
                    <div className="text-sm mt-2 opacity-75">Placeholder for your visual asset</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="section-large bg-white">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">See your retirement future clearly</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our interactive dashboard shows you exactly where you stand and what you need to do to reach your retirement goals.
            </p>
          </div>
          
          <div className="visual-placeholder visual-showcase h-[600px] w-full mb-16">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-xl font-semibold">Interactive Retirement Dashboard</div>
              <div className="text-sm mt-2 opacity-75">Placeholder for your main product visualization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="h1-text mb-6">Everything you need to plan with confidence</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Stop guessing about retirement. Get specific answers and actionable steps to reach your goals.
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
              <h3 className="h2-text mb-4">Get your exact date</h3>
              <p className="body-text text-gray-600">
                Input your real numbers and get a personalized retirement timeline. No generic estimates or scary projections.
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
              <h3 className="h2-text mb-4">Optimize your path</h3>
              <p className="body-text text-gray-600">
                See exactly how small changes to savings or timeline affect your retirement date. Make informed decisions.
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
              <h3 className="h2-text mb-4">Track your progress</h3>
              <p className="body-text text-gray-600">
                Stay on course with regular check-ins as your situation changes over time. Life happens, plans adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-large bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-16">
              <blockquote className="h1-text mb-8 text-gray-800 leading-relaxed">
                "I found out I could retire 3 years earlier than I thought. The recommendations were so simple but made a huge difference."
              </blockquote>
              <cite className="body-large text-gray-600">
                — Sarah M., Teacher, Age 42
              </cite>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="body-text text-gray-600">Retirement calculations completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6 months</div>
                <div className="body-text text-gray-600">Average accuracy of timelines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">BLS Data</div>
                <div className="body-text text-gray-600">Based on Bureau of Labor Statistics</div>
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
                We know retirement planning can feel overwhelming. Here are answers to the questions we hear most often.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="h2-text mb-4">How accurate can this really be?</h3>
                <p className="body-text text-gray-600">
                  We use your actual savings, income, and spending data - not generic assumptions. Most people find our timelines within 6 months of reality.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">What if I'm behind on savings?</h3>
                <p className="body-text text-gray-600">
                  That's exactly why you need to know where you stand. We'll show you specific steps to get back on track.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">Is this just another generic calculator?</h3>
                <p className="body-text text-gray-600">
                  Nope. We account for your real situation: salary growth, Social Security, healthcare costs, and lifestyle goals.
                </p>
              </div>
              <div>
                <h3 className="h2-text mb-4">What if my situation is complicated?</h3>
                <p className="body-text text-gray-600">
                  We handle multiple income sources, debt, real estate, and other assets. If it's truly complex, we'll recommend professional advice.
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
              <h2 className="h1-text text-white mb-6 leading-tight">Ready to know when you can retire?</h2>
              <p className="body-large text-white mb-8 opacity-95">
                Get your personalized timeline in less than 5 minutes. No complex forms, no financial jargon - just clear answers about your future.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Personalized timeline based on your real numbers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Actionable steps to optimize your retirement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="body-text text-white opacity-95">Free to use, no credit card required</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#calculator" className="btn-accent px-8 py-4 text-lg font-semibold">
                  Calculate My Retirement Date
                </a>
                <a href="#how-it-works" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 text-lg">
                  See how it works
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="visual-placeholder visual-showcase h-80 w-full">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-4">🎯</div>
                    <div className="text-lg font-semibold mb-2">Retirement Calculator</div>
                    <div className="text-sm opacity-75">Interactive tool placeholder</div>
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
              <span className="h2-text text-primary">RetireWise</span>
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
