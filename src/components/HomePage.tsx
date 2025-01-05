import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Dices, Share2, Code } from 'lucide-react';
import { CategoryGrid } from './CategoryGrid';
import { FeaturedGames } from './FeaturedGames';
import { SEO } from './SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO 
        title="Free Online Slot Maker - Create Custom Slot Machine Games"
        description="Create and customize slot machine games with our free online slot maker. Design unique slots, share instantly, and embed anywhere. The best alternative to FPE slot maker and Dandy's World slots."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Custom Games with Our Slot Maker
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The ultimate free online slot maker for designing unique slot machine games. 
            Perfect for random selections, fun activities, and creative content!
          </p>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <PlusCircle className="w-6 h-6" />
            Start Creating Slots
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Slot Maker?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dices className="w-8 h-8 text-indigo-600" />,
                title: "Easy-to-Use Slot Maker",
                description: "Create custom slot machines in minutes with our intuitive slot maker interface."
              },
              {
                icon: <Share2 className="w-8 h-8 text-indigo-600" />,
                title: "Share Your Slots",
                description: "Get a unique link for your slot machine game and share it instantly."
              },
              {
                icon: <Code className="w-8 h-8 text-indigo-600" />,
                title: "Embed Slot Games",
                description: "Add your slot machine to any website with our embed code."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Slot Machine Games</h2>
          <FeaturedGames />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Slot Games by Category</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Our Slot Maker</h3>
              <p className="text-gray-600">
                Create amazing slot machine games with our free online slot maker. 
                Similar to FPE slot maker and Dandy's World, but with more features 
                and better customization options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Slot Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Custom Slot Machines</li>
                <li>Random Name Picker Slots</li>
                <li>Emoji Slot Games</li>
                <li>BFDI-style Slots</li>
                <li>Genshin Impact Slots</li>
                <li>Dandy's World Slots</li>
                <li>Text-based Slot Games</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Slot Maker Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Free Slot Machine Creator</li>
                <li>No Registration Required</li>
                <li>Custom Slot Content</li>
                <li>Easy Slot Sharing</li>
                <li>Website Slot Embedding</li>
                <li>Multiple Slot Styles</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm">
            <p>Create your own slot machine game today with our free online slot maker!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};