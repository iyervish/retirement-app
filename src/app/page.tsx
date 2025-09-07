export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="h1-text text-primary">RetireWise</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
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
      <section className="pt-24 pb-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="hero-text">
                Know exactly when you can retire
              </h1>
              <p className="body-large">
                Get a personalized retirement timeline based on your current savings, income, and goals. No generic advice, no scary surprises - just clear answers about your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#calculator" className="btn-primary text-center">
                  See My Retirement Date
                </a>
                <a href="#how-it-works" className="btn-secondary text-center">
                  See how it works
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                {/* Timeline Visualization */}
                <svg viewBox="0 0 600 300" className="w-full h-auto">
                  {/* Timeline line */}
                  <line x1="50" y1="150" x2="550" y2="150" stroke="#1B4332" strokeWidth="3" />
                  
                  {/* Milestone markers */}
                  <circle cx="100" cy="150" r="6" fill="#52A068" />
                  <circle cx="200" cy="150" r="6" fill="#52A068" />
                  <circle cx="300" cy="150" r="6" fill="#52A068" />
                  <circle cx="400" cy="150" r="6" fill="#52A068" />
                  
                  {/* Current position */}
                  <circle cx="150" cy="150" r="10" fill="#FFB627" stroke="#1B4332" strokeWidth="2" />
                  <text x="150" y="120" textAnchor="middle" className="small-text fill-gray-700">You are here</text>
                  <text x="150" y="180" textAnchor="middle" className="small-text fill-gray-700">Age 35</text>
                  
                  {/* Retirement endpoint */}
                  <circle cx="500" cy="150" r="12" fill="#FFB627" stroke="#1B4332" strokeWidth="3" />
                  <text x="500" y="120" textAnchor="middle" className="small-text fill-gray-700 font-semibold">Retirement</text>
                  <text x="500" y="180" textAnchor="middle" className="small-text fill-gray-700">Age 65</text>
                  
                  {/* Savings milestones */}
                  <circle cx="250" cy="150" r="4" fill="#52A068" />
                  <circle cx="350" cy="150" r="4" fill="#52A068" />
                  <circle cx="450" cy="150" r="4" fill="#52A068" />
                  
                  {/* Labels */}
                  <text x="100" y="200" textAnchor="middle" className="small-text fill-gray-500">$100k</text>
                  <text x="200" y="200" textAnchor="middle" className="small-text fill-gray-500">$250k</text>
                  <text x="300" y="200" textAnchor="middle" className="small-text fill-gray-500">$500k</text>
                  <text x="400" y="200" textAnchor="middle" className="small-text fill-gray-500">$750k</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h1-text mb-4">Everything you need to plan with confidence</h2>
            <p className="body-large max-w-2xl mx-auto">
              Stop guessing about retirement. Get specific answers and actionable steps to reach your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 32 32" className="mx-auto">
                  <rect x="4" y="4" width="24" height="28" rx="2" stroke="#1B4332" strokeWidth="1.5" fill="none"/>
                  <rect x="8" y="8" width="16" height="2" fill="#1B4332"/>
                  <rect x="8" y="12" width="12" height="1" fill="#1B4332"/>
                  <rect x="8" y="15" width="14" height="1" fill="#1B4332"/>
                  <rect x="8" y="18" width="10" height="1" fill="#1B4332"/>
                  <circle cx="22" cy="20" r="2" fill="#1B4332"/>
                  <rect x="8" y="22" width="16" height="1" fill="#1B4332"/>
                  <rect x="8" y="25" width="12" height="1" fill="#1B4332"/>
                </svg>
              </div>
              <h3 className="h3-text mb-4">Get your exact date</h3>
              <p className="body-text">
                Input your real numbers and get a personalized retirement timeline. No generic estimates or scary projections.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 32 32" className="mx-auto">
                  <path d="M4 24 L12 16 L20 20 L28 8" stroke="#1B4332" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="16" r="2" fill="#1B4332"/>
                  <circle cx="20" cy="20" r="2" fill="#1B4332"/>
                  <circle cx="28" cy="8" r="2" fill="#1B4332"/>
                  <path d="M26 6 L30 10 M30 6 L26 10" stroke="#1B4332" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="h3-text mb-4">Optimize your path</h3>
              <p className="body-text">
                See exactly how small changes to savings or timeline affect your retirement date. Make informed decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 32 32" className="mx-auto">
                  <rect x="4" y="6" width="24" height="20" rx="2" stroke="#1B4332" strokeWidth="1.5" fill="none"/>
                  <rect x="6" y="4" width="20" height="4" rx="1" fill="#1B4332"/>
                  <rect x="8" y="12" width="3" height="2" fill="#1B4332"/>
                  <rect x="13" y="12" width="3" height="2" fill="#1B4332"/>
                  <rect x="18" y="12" width="3" height="2" fill="#1B4332"/>
                  <rect x="23" y="12" width="3" height="2" fill="#1B4332"/>
                  <rect x="8" y="16" width="3" height="2" fill="#1B4332"/>
                  <rect x="13" y="16" width="3" height="2" fill="#1B4332"/>
                  <rect x="18" y="16" width="3" height="2" fill="#1B4332"/>
                  <rect x="23" y="16" width="3" height="2" fill="#1B4332"/>
                  <rect x="8" y="20" width="3" height="2" fill="#1B4332"/>
                  <rect x="13" y="20" width="3" height="2" fill="#1B4332"/>
                  <rect x="18" y="20" width="3" height="2" fill="#1B4332"/>
                  <rect x="23" y="20" width="3" height="2" fill="#1B4332"/>
                  <circle cx="21" cy="14" r="1.5" fill="#FFB627"/>
                </svg>
              </div>
              <h3 className="h3-text mb-4">Track your progress</h3>
              <p className="body-text">
                Stay on course with regular check-ins as your situation changes over time. Life happens, plans adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="h2-text mb-6 text-gray-700">
              "I found out I could retire 3 years earlier than I thought. The recommendations were so simple but made a huge difference."
            </blockquote>
            <cite className="body-text text-gray-500">
              — Sarah M., Teacher, Age 42
            </cite>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="body-text text-gray-600">
                Based on Bureau of Labor Statistics data and 10,000+ retirement calculations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="h1-text mb-4">Common questions</h2>
              <p className="body-large">
                We know retirement planning can feel overwhelming. Here are answers to the questions we hear most often.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="h3-text mb-3">How accurate can this really be?</h3>
                <p className="body-text">
                  We use your actual savings, income, and spending data - not generic assumptions. Most people find our timelines within 6 months of reality.
                </p>
              </div>
              <div>
                <h3 className="h3-text mb-3">What if I'm behind on savings?</h3>
                <p className="body-text">
                  That's exactly why you need to know where you stand. We'll show you specific steps to get back on track.
                </p>
              </div>
              <div>
                <h3 className="h3-text mb-3">Is this just another generic calculator?</h3>
                <p className="body-text">
                  Nope. We account for your real situation: salary growth, Social Security, healthcare costs, and lifestyle goals.
                </p>
              </div>
              <div>
                <h3 className="h3-text mb-3">What if my situation is complicated?</h3>
                <p className="body-text">
                  We handle multiple income sources, debt, real estate, and other assets. If it's truly complex, we'll recommend professional advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-primary">
        <div className="container text-center">
          <h2 className="h1-text text-white mb-4">Ready to know when you can retire?</h2>
          <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
            Get your personalized timeline in less than 5 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#calculator" className="btn-accent">
              Calculate My Retirement Date
            </a>
            <a href="#how-it-works" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="h3-text text-primary">RetireWise</span>
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="small-text text-gray-600 hover:text-primary transition-colors">Privacy</a>
              <a href="#terms" className="small-text text-gray-600 hover:text-primary transition-colors">Terms</a>
              <a href="#contact" className="small-text text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="small-text text-gray-500">
              © 2024 RetireWise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
