import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-D4VC0339L0';

// Initialize Google Analytics
export const initGA = () => {
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `;
  
  document.head.appendChild(script1);
  document.head.appendChild(script2);
};

// Hook to track page views
export const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
};

// Initialize Adsterra
export const initAdsterraPopunder = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//devolutionsingclone.com/96/af/c5/96afc559a4326fc3bbbb3da06ef15af6.js';
  //script.async = true;
  document.head.appendChild(script);
};

// Initialize Adsterra
export const initAdsterraSocialBar = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//devolutionsingclone.com/28/a9/24/28a9242d82313b7493914cf48b8dd5f3.js';
  //script.async = true;
  document.head.appendChild(script);
};