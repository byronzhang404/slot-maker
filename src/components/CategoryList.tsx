import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../lib/categories';

export const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {CATEGORIES.map(category => (
        <Link
          key={category}
          to={`/category/${category}`}
          className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center capitalize"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};