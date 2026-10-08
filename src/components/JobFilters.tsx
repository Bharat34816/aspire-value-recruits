'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, MapPin, Briefcase, Filter, X, RotateCcw } from 'lucide-react';

const LOCATIONS = ['Hyderabad', 'Bengaluru', 'Remote'];

const INDUSTRIES = [
  'Cloud & Distributed Systems',
  'Data & Generative AI',
  'FinTech & BFSI',
  'Product Engineering',
];

const EXPERIENCE_LEVELS = [
  { label: 'All Experience', value: '' },
  { label: '0 - 4 Years (Junior)', value: '0-4' },
  { label: '5 - 9 Years (Mid/Senior)', value: '5-9' },
  { label: '10+ Years (Lead/Staff)', value: '10+' },
];

export default function JobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQ = searchParams.get('q') || '';
  const currentLocation = searchParams.get('location') || '';
  const currentIndustry = searchParams.get('industry') || '';
  const currentExp = searchParams.get('experience') || '';

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete('page');
    router.push(`/jobs?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q')?.toString() || '';
    updateFilters('q', query);
  };

  const clearAllFilters = () => {
    router.push('/jobs');
  };

  const hasActiveFilters = Boolean(currentQ || currentLocation || currentIndustry || currentExp);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          Filter Jobs
        </h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All
          </button>
        )}
      </div>

      {/* Keyword Search Form */}
      <form onSubmit={handleSearchSubmit} className="space-y-2">
        <label htmlFor="search-input" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Keywords
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          <input
            id="search-input"
            type="text"
            name="q"
            defaultValue={currentQ}
            placeholder="Title, skill, or tech..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </form>

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          Location
        </label>
        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => updateFilters('location', '')}
            className={`text-left text-xs px-3 py-1.5 rounded-lg transition font-medium ${
              !currentLocation
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Locations
          </button>
          {LOCATIONS.map((loc) => {
            const isSelected = currentLocation.toLowerCase() === loc.toLowerCase();
            return (
              <button
                key={loc}
                type="button"
                onClick={() => updateFilters('location', isSelected ? '' : loc)}
                className={`text-left text-xs px-3 py-1.5 rounded-lg transition font-medium flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{loc}</span>
                {isSelected && <X className="w-3 h-3 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Industry / Practice Area */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          Industry Corridor
        </label>
        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => updateFilters('industry', '')}
            className={`text-left text-xs px-3 py-1.5 rounded-lg transition font-medium ${
              !currentIndustry
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Industries
          </button>
          {INDUSTRIES.map((ind) => {
            const isSelected = currentIndustry === ind;
            return (
              <button
                key={ind}
                type="button"
                onClick={() => updateFilters('industry', isSelected ? '' : ind)}
                className={`text-left text-xs px-3 py-1.5 rounded-lg transition font-medium flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="truncate">{ind}</span>
                {isSelected && <X className="w-3 h-3 text-white shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experience Level */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Experience Range
        </label>
        <select
          value={currentExp}
          onChange={(e) => updateFilters('experience', e.target.value)}
          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {EXPERIENCE_LEVELS.map((exp) => (
            <option key={exp.value} value={exp.value}>
              {exp.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
