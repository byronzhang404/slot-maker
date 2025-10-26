import React, { useEffect } from 'react';
import { initGA, usePageTracking, initAdsterra } from '../lib/analytics';

export const Analytics: React.FC = () => {
  useEffect(() => {
    initGA();
    initAdsterra();
  }, []);

  usePageTracking();

  return null;
};