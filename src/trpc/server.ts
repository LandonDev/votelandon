'use client';

import React from 'react';

// Simplified hydration component without server-only imports
export function HydrateClient({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
