import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Loading Mandates & Data...
      </span>
    </div>
  );
}
