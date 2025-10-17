import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO 
        title="Privacy Policy - Custom Slot Machine Generator"
        description="Learn about Slot Maker's privacy policy. We prioritize your privacy with no personal data collection, no user tracking, and full control over your browsing experience."
        canonicalPath="/privacy-policy"
      />
      
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700">
              Your privacy is important to us at Slot Maker
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">At Slot Maker, we prioritize your privacy:</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We do not collect any personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No user accounts are created</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No tracking of your browsing behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You can clear browser cookies at any time</span>
                </li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                Our website includes links to slot-maker.com, where you can:
              </p>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Create and play slot machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Access game updates and news</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Share your creations</span>
                </li>
              </ul>
              <p className="text-gray-700">
                These platforms have their own privacy policies and data collection practices.
              </p>
            </div>

            {/* Social Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Social Sharing</h2>
              <p className="text-gray-700 mb-4">When you share your slot machines:</p>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Links are publicly accessible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No personal information is included in shared links</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Social media platforms may have their own privacy policies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You control what you share</span>
                </li>
              </ul>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">Since we don't collect personal information:</p>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No personal data is stored or processed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No user tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No cookies except those essential for site functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You maintain full control over your browser settings</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions about this privacy policy or Slot Maker, please contact us:
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:hi@slotmaker.net" className="text-indigo-600 hover:text-indigo-800 underline">hi@slotmaker.net</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};
