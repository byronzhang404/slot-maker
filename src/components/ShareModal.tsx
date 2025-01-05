import React, { useState } from 'react';
import { Copy, X } from 'lucide-react';

interface ShareModalProps {
  gameId: string;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ gameId, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [iframeSize, setIframeSize] = useState({ width: 400, height: 500 });
  
  const baseUrl = window.location.origin;
  const gameUrl = `${baseUrl}/game/${gameId}`;
  const iframeCode = `<iframe src="${gameUrl}" width="${iframeSize.width}" height="${iframeSize.height}" frameborder="0"></iframe>`;

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Share Your Slot Machine</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Direct Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={gameUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(gameUrl)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Embed Size
            </label>
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600">Width (px)</label>
                <input
                  type="number"
                  value={iframeSize.width}
                  onChange={(e) => setIframeSize(prev => ({ ...prev, width: parseInt(e.target.value) || 400 }))}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Height (px)</label>
                <input
                  type="number"
                  value={iframeSize.height}
                  onChange={(e) => setIframeSize(prev => ({ ...prev, height: parseInt(e.target.value) || 500 }))}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Embed Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={iframeCode}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(iframeCode)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {copied && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};