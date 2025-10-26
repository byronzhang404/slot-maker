import React, { useEffect } from 'react';
import { initGA, usePageTracking ,initAdsterraSocialBar} from '../lib/analytics';

export const Analytics: React.FC = () => {
  useEffect(() => {
    initGA();
    //initAdsterra();
    initAdsterraSocialBar();
  }, []);

  usePageTracking();

  return null;
};