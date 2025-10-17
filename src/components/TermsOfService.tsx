import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO 
        title="Terms of Service - Custom Slot Machine Generator"
        description="Read Slot Maker's terms of service. Learn about website usage, slot machine creation guidelines, sharing policies, and service limitations."
        canonicalPath="/terms-of-service"
      />
      
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-700">
              Please read these terms before using Slot Maker
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Website Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Website Usage</h2>
              <p className="text-gray-700 mb-4">By accessing Slot Maker website, you agree to:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Use the website for personal, non-commercial purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Not attempt to modify, distribute, or reverse engineer any website content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Follow all applicable laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Respect other users' rights and privacy</span>
                </li>
              </ul>
            </div>

            {/* Slot Machine Creation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Slot Machine Creation</h2>
              <p className="text-gray-700 mb-4">When creating slot machines, you must:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Only use content you have rights to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Not create offensive or inappropriate content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Not include any harmful or malicious elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Respect intellectual property rights</span>
                </li>
              </ul>
            </div>

            {/* Sharing and Distribution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Sharing and Distribution</h2>
              <p className="text-gray-700 mb-4">For sharing slot machines:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You retain ownership of your creations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You grant us permission to display and share your slots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>You can remove your content at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Social media sharing must comply with platform policies</span>
                </li>
              </ul>
            </div>

            {/* Limitations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Limitations</h2>
              <p className="text-gray-700 mb-4">Slot Maker is provided 'as is':</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We don't guarantee uninterrupted service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We may modify or discontinue features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We're not responsible for user-generated content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We reserve the right to remove inappropriate content</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Disclaimer</h2>
              <p className="text-gray-700 mb-4">Please note:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Slot machines are for entertainment only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>No real money or gambling is involved</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Results are randomly generated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>We're not responsible for any losses or damages</span>
                </li>
              </ul>
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
