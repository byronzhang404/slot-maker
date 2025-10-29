import React, { useEffect, useRef } from 'react';

export const FixedAdDiv: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous children to avoid duplicates (in case of hot reloads)
    container.innerHTML = '';

    // Inline script to set atOptions
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '168d33916847e6fc4c8bc6977e3d9e00',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    // External invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//notorietyinflected.com/168d33916847e6fc4c8bc6977e3d9e00/invoke.js';

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);

    return () => {
      // Cleanup on unmount
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden sm:block"
      style={{
        position: 'fixed',
        right: '16px',
        bottom: '16px',
        zIndex: 2147483647,
      }}
    />
  );
};