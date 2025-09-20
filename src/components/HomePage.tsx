import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Dices, 
  Share2, 
  Code, 
  Target, 
  Users, 
  Sparkles,
  Palette,
  Globe,
  Lock,
  Zap,
  Gift
} from 'lucide-react';
import { CategoryGrid } from './CategoryGrid';
import { FeaturedGames } from './FeaturedGames';
import { FAQ } from './FAQ';
import { SEO } from './SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO 
        title="Custom Slot Machine Generator - Create Free Online Slot Games"
        description="The best custom slot machine generator for creating unique slot games. Design, customize, and share your slot machines instantly. Free online slot maker with unlimited possibilities."
      />
      
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 z-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Custom Slot Machine Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            The most powerful custom slot machine generator for creating unique games. 
            Design, customize, and share your slot machines in minutes - no coding required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
            >
              <PlusCircle className="w-6 h-6" />
              Create Custom Slot Machine
            </Link>
            <Link
              to="/game/0b68392b-df3f-43dd-97d6-959a4d4dd089"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all border-2 border-indigo-600"
            >
              <Dices className="w-6 h-6" />
              Try Demo Games
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Create with Our Custom Slot Machine Generator
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Design Your Slots",
                description: "Use our custom slot machine generator to create unique combinations with text and emojis.",
                icon: <PlusCircle className="w-8 h-8 text-indigo-600" />
              },
              {
                step: "2",
                title: "Customize Design",
                description: "Preview your custom slot machine in real-time as you make adjustments.",
                icon: <Palette className="w-8 h-8 text-indigo-600" />
              },
              {
                step: "3",
                title: "Share & Play",
                description: "Get a unique URL and embed code to share your custom slot machine anywhere.",
                icon: <Share2 className="w-8 h-8 text-indigo-600" />
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 rounded-2xl bg-gradient-to-b from-white to-indigo-50/30 border border-indigo-100">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Perfect Uses for Custom Slot Machines</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Event Planning",
                description: "Generate random selections for prizes and giveaways"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Education",
                description: "Create interactive learning slot machines"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Entertainment",
                description: "Design fun custom slot machine games"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Content Creation",
                description: "Make engaging slot machine content"
              }
            ].map((useCase, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  {useCase.icon}
                </div>
                <h3 className="font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Custom Slot Machine Generator</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10 text-indigo-600" />,
                title: "Easy to Use",
                description: "Generate custom slot machines without any technical knowledge"
              },
              {
                icon: <Lock className="w-10 h-10 text-indigo-600" />,
                title: "Secure & Reliable",
                description: "Your custom slot machines are always available and protected"
              },
              {
                icon: <Code className="w-10 h-10 text-indigo-600" />,
                title: "Easy Integration",
                description: "Embed your custom slot machines on any website instantly"
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-indigo-50/30 border border-indigo-100">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Popular Custom Slot Machines</h2>
          <FeaturedGames />
          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all border-2 border-indigo-600"
            >
              <Dices className="w-5 h-5" />
              Explore All Slot Machines
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Browse Custom Slot Machines</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">About Our Custom Slot Machine Generator</h3>
              <p className="text-gray-600 mb-4">
                Create amazing custom slot machines with our free online generator. 
                Perfect for event organizers, educators, content creators, and anyone 
                looking to add interactive slot machine games to their projects.
              </p>
              <Link
                to="/create"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
              >
                <PlusCircle className="w-5 h-5" />
                Start Creating Now
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Popular Uses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Random Name Picker</li>
                <li>Prize Giveaways</li>
                <li>Team Selection</li>
                <li>Party Games</li>
                <li>Classroom Activities</li>
                <li>Social Media Content</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Custom Content</li>
                <li>Real-time Preview</li>
                <li>Instant Sharing</li>
                <li>Website Embedding</li>
                <li>Mobile Friendly</li>
                <li>No Registration</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-600 border-t border-gray-200 pt-8">
            <p>Create your custom slot machine today - it's free and no registration required!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
