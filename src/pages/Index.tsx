
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HeroSection = () => (
  <div className="relative hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
    <div className="container mx-auto px-4 py-24 relative z-10">
      <div className="text-center max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Transform Your Hiring Process with AI-Powered Interviews
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          InterviewAI helps recruiters save time and candidates prepare better with intelligent interview simulations and analytics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-gray-100">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-blue-700">
            <Link to="/demo">View Demo</Link>
          </Button>
        </div>
      </div>
    </div>
    
    <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
      <div className="bg-white rounded-lg shadow-xl w-[800px] h-[400px] overflow-hidden">
        <img 
          src="https://placehold.co/800x400/EEE/31343C?text=Interview+Platform+Preview" 
          alt="Interview Platform Preview" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      title: "AI-Powered Interviews",
      description: "Our intelligent chatbot conducts natural conversations, asking job-relevant questions and providing meaningful feedback.",
      icon: (
        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Analytics",
      description: "Get detailed insights into candidate performance with sentiment analysis, skills assessment, and behavioral indicators.",
      icon: (
        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Practice Interviews",
      description: "Candidates can prepare effectively with realistic practice sessions that mimic real job interviews.",
      icon: (
        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-24 lg:py-32 mt-20 lg:mt-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
          <p className="text-lg text-gray-600">
            Our platform streamlines the interview process for both recruiters and candidates with powerful AI-driven tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-highlight">
              <CardContent className="p-8">
                <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const UserRolesSection = () => {
  const roles = [
    {
      title: "For Recruiters",
      description: "Save time and resources by automating initial interviews. Get detailed candidate insights and make data-driven decisions.",
      image: "https://placehold.co/600x400/EEE/31343C?text=Recruiter+Dashboard",
      benefits: [
        "Conduct more interviews without increasing workload",
        "Standardize evaluation criteria across all candidates",
        "Access comprehensive performance analytics",
        "Eliminate scheduling conflicts with 24/7 availability"
      ]
    },
    {
      title: "For Candidates",
      description: "Practice interviews anytime, anywhere. Receive instant feedback to improve your performance and land your dream job.",
      image: "https://placehold.co/600x400/EEE/31343C?text=Candidate+Interface",
      benefits: [
        "Prepare with realistic practice interviews",
        "Receive detailed feedback on your responses",
        "Improve confidence through repetition",
        "Practice at your convenience, 24/7"
      ]
    },
    {
      title: "For Admins",
      description: "Gain comprehensive insights into your organization's recruitment metrics. Optimize processes and improve hiring outcomes.",
      image: "https://placehold.co/600x400/EEE/31343C?text=Admin+Analytics",
      benefits: [
        "Track recruitment metrics across the organization",
        "Manage user accounts and permissions",
        "Monitor subscription usage and billing",
        "Access advanced analytics and reporting features"
      ]
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored For Everyone</h2>
          <p className="text-lg text-gray-600">
            Our platform offers specialized features for recruiters, candidates, and administrators.
          </p>
        </div>

        <div className="space-y-16">
          {roles.map((role, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src={role.image} 
                  alt={role.title} 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{role.description}</p>
                
                <ul className="space-y-3">
                  {role.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for candidates wanting to practice",
      features: [
        "1 practice interview per month",
        "Basic feedback report",
        "Limited question bank",
        "Email support"
      ],
      cta: "Sign Up",
      popular: false
    },
    {
      name: "Basic",
      price: "49",
      description: "Great for small teams and startups",
      features: [
        "10 interviews per month",
        "Detailed candidate reports",
        "Custom question templates",
        "Priority email support",
        "Basic analytics dashboard"
      ],
      cta: "Start 14-day Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "99",
      description: "For growing teams and organizations",
      features: [
        "50 interviews per month",
        "Advanced analytics and reporting",
        "Custom interview workflows",
        "Phone & email support",
        "Multiple team members",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-xs font-semibold py-1 text-center">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/register">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CtaSection = () => (
  <div className="py-16 bg-blue-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Interview Process?</h2>
      <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
        Join thousands of recruiters and candidates who are already using InterviewAI to streamline their interview process.
      </p>
      <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
        <Link to="/register">Get Started Free</Link>
      </Button>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <UserRolesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
