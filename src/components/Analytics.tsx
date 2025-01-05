import React, { useEffect } from 'react';
import { initGA, usePageTracking } from '../lib/analytics';

export const Analytics: React.FC = () => {
  useEffect(() => {
    initGA();
  }, []);

  usePageTracking();

  return null;
};