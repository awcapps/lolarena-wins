import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  resultsCount: number
}

export default function SearchBar({ value, onChange, resultsCount }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for a champion..."
          className="w-full pl-11 pr-11 py-3 bg-lol-dark-2 border border-lol-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-lol-gold transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {value && (
        <p className="text-sm text-gray-400 mt-2">
          {resultsCount} champion{resultsCount !== 1 ? 's' : ''} found
        </p>
      )}
    </div>
  )
}
