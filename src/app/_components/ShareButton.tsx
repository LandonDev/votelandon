'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShareButton() {
  const [copySuccess, setCopySuccess] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareOnDiscord = () => {
    window.open(`https://discord.com/channels/@me?text=${encodeURIComponent(`Check out Landon Hale's plan for MTSU Esports Club President! ${shareUrl}`)}`, '_blank');
  };

  return (
    <div className="mx-auto mt-8 flex max-w-sm flex-wrap justify-center gap-3">
      {/* Copy Link Button */}
      <motion.button
        onClick={copyToClipboard}
        className="flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 py-2.5 font-medium text-white shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        {copySuccess ? 'Copied!' : 'Copy Link'}
      </motion.button>

      {/* Discord Button */}
      <motion.button
        onClick={shareOnDiscord}
        className="flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 font-medium text-white shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.5979.3428-1.2193.6447-1.8721.8923a.076.076 0 00-.0416.1057c.3604.698.7719 1.3628 1.225 1.9932a.077.077 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
        Share on Discord
      </motion.button>
    </div>
  );
} 