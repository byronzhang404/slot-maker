import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = 'Create Custom Slot Games - Free Online Slot Maker',
  description = 'Design and share custom slot machine games with our free online slot maker. Create unique slots with custom emojis, instant sharing, and website embedding. Start making your slot game today!',
  canonicalPath
}) => {
  const location = useLocation();
  const baseUrl = 'https://slotmaker.net';
  const canonicalUrl = baseUrl + (canonicalPath || location.pathname);

  React.useEffect(() => {
    // Update meta tags
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:url': canonicalUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:url': canonicalUrl,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(name.includes('og:') ? 'property' : 'name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    return () => {
      // Cleanup is handled by React
    };
  }, [title, description, canonicalUrl]);

  return null;
};