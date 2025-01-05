import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGamesInCategory } from '../hooks/useGamesInCategory';
import { SlotMachine } from './SlotMachine';
import { Home, RefreshCw } from 'lucide-react';
import { SEO } from './SEO';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { games, loading, error } = useGamesInCategory(category);

  const title = category === 'other' 
    ? 'Other Slot Machine Games - Free Online Slot Maker'
    : `Slot Games Starting With ${category?.toUpperCase()} - Free Online Slot Maker`;
  
  const description = category === 'other'
    ? 'Browse our collection of unique slot machine games that don\'t fit traditional categories. Create, play, and share custom slot games for free!'
    : `Explore slot machine games starting with ${category?.toUpperCase()}. Create your own custom slots, share with friends, and embed on any website.`;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SEO title={title} description={description} />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold capitalize">
          {category === 'other' ? 'Other Games' : `Games Starting With "${category}"`}
        </h1>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600">Loading games...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <RefreshCw className="w-5 h-5" />
            Retry
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(game => (
            <div key={game.id} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">{game.name}</h2>
              <SlotMachine slots={game.slots} />
              <Link
                to={`/game/${game.id}`}
                className="mt-4 text-indigo-600 hover:text-indigo-800 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
          
          {games.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No games found in this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
};