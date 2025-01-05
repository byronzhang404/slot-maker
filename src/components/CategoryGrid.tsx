import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../lib/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
      {CATEGORIES.map(category => (
        <Link
          key={category}
          to={`/category/${category}`}
          className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center"
        >
          <span className="text-lg font-medium uppercase">
            {category === 'other' ? 'Other' : category}
          </span>
        </Link>
      ))}
    </div>
  );
};