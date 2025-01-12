import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* About Slot Maker */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">What is Slot Maker?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">Slot Maker is a free online platform that lets you create custom slot machine games. What makes us unique:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>No coding or technical skills required</li>
                <li>Instant sharing and embedding options</li>
                <li>Fully customizable content and design</li>
                <li>Works on all devices and browsers</li>
                <li>No registration or downloads needed</li>
              </ul>
            </div>
          </details>

          {/* Creating Slots */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">How do I create a slot machine?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">Creating your own slot machine is simple:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Click the "Create Your Slot Game" button</li>
                <li>Add up to 3 groups of content (text, emojis, or both)</li>
                <li>Preview and test your slot machine</li>
                <li>Save and get your unique game URL</li>
              </ol>
              <div className="mt-4">
                <Link 
                  to="/create"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  Start Creating Now
                </Link>
              </div>
            </div>
          </details>

          {/* How it Works */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">How do slot machines work?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">Our slot machines use a fair random selection system:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Each slot spins independently</li>
                <li>Results are randomly selected from your defined options</li>
                <li>Every option has an equal chance of being selected</li>
                <li>Results are generated in real-time</li>
                <li>No predetermined outcomes or rigging</li>
              </ul>
            </div>
          </details>

          {/* Sharing and Access */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">How do I share my slot machine?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">There are several ways to share your slot machine:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Share the unique URL directly</li>
                <li>Embed it on your website using our embed code</li>
                <li>Share on social media platforms</li>
                <li>Copy the link to clipboard with one click</li>
              </ul>
              <p className="mt-4">All shared slots are instantly accessible on any device!</p>
            </div>
          </details>

          {/* Customization and Editing */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">Can I edit my slot machine after publishing?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">No, once a slot machine is published, it cannot be edited. This ensures:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Consistency for shared links and embeds</li>
                <li>Fairness in game results</li>
                <li>Reliability for your audience</li>
              </ul>
              <p className="mt-4">If you need to make changes, we recommend creating a new slot machine with your desired updates.</p>
              <div className="mt-4">
                <Link 
                  to="/create"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" />
                  Create New Slot Machine
                </Link>
              </div>
            </div>
          </details>

          {/* Platform and Devices */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">What devices can I use Slot Maker on?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">Slot Maker works everywhere:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>All modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile phones and tablets</li>
                <li>Desktop and laptop computers</li>
                <li>No app installation required</li>
                <li>Responsive design adapts to any screen size</li>
              </ul>
            </div>
          </details>

          {/* Pricing */}
          <details className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center cursor-pointer p-6">
              <h3 className="text-xl font-semibold text-gray-800">Is Slot Maker really free?</h3>
              <span className="text-indigo-600">
                <ChevronDown className="w-6 h-6 group-open:hidden" />
                <ChevronUp className="w-6 h-6 hidden group-open:block" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              <p className="mb-4">Yes! Slot Maker is completely free:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>No hidden fees or charges</li>
                <li>All features are available to everyone</li>
                <li>No premium or paid versions</li>
                <li>Free embedding on any website</li>
                <li>Unlimited slot machine creation</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}; 