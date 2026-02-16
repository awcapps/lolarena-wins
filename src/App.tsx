import { useEffect, useState } from 'react'
import { Download, Upload, RotateCcw, Trophy } from 'lucide-react'
import ChampionCard from './components/ChampionCard'
import StatsBar from './components/StatsBar'
import SearchBar from './components/SearchBar'
import { Champion } from './types/champion'
import { storage, championUtils } from './utils/storage'

const DDragon_BASE_URL = 'https://ddragon.leagueoflegends.com'

function App() {
  const [champions, setChampions] = useState<Champion[]>([])
  const [filteredChampions, setFilteredChampions] = useState<Champion[]>([])
  const [validatedChampions, setValidatedChampions] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [version, setVersion] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch latest version and champions data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        
        // Get latest version
        const versionsRes = await fetch(`${DDragon_BASE_URL}/api/versions.json`)
        const versions = await versionsRes.json()
        const latestVersion = versions[0]
        setVersion(latestVersion)

        // Get champions data
        const championsRes = await fetch(
          `${DDragon_BASE_URL}/cdn/${latestVersion}/data/en_US/champion.json`
        )
        const data = await championsRes.json()
        
        const championsArray = Object.values(data.data) as Champion[]
        const sortedChampions = championUtils.sortChampions(championsArray)
        
        setChampions(sortedChampions)
        setFilteredChampions(sortedChampions)
        
        // Load validated champions from localStorage
        setValidatedChampions(storage.getValidatedChampions())
      } catch (err) {
        setError('Error loading champions. Check your connection.')
        console.error('Error fetching champions:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter champions when search term changes
  useEffect(() => {
    const filtered = championUtils.filterChampions(champions, searchTerm)
    setFilteredChampions(filtered)
  }, [searchTerm, champions])

  const handleToggleChampion = (championId: string) => {
    const updated = storage.toggleChampion(championId)
    setValidatedChampions(new Set(updated))
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all validations?')) {
      storage.clearAll()
      setValidatedChampions(new Set())
    }
  }

  const handleExport = () => {
    const data = storage.exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `lol-arena-wins-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const jsonData = event.target?.result as string
          if (storage.importData(jsonData)) {
            setValidatedChampions(storage.getValidatedChampions())
            alert('Data imported successfully!')
          } else {
            alert('Error importing data.')
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const stats = championUtils.getStats(champions, validatedChampions)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-lol-gold border-t-transparent mx-auto mb-4" />
          <p className="text-gray-400">Loading champions...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-xl mb-2">❌ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-lol-gold hover:bg-lol-gold-dark rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="w-10 h-10 text-lol-gold" />
            <h1 className="text-4xl md:text-5xl font-bold text-lol-gold">
              LoL Arena Wins
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Track your Arena mode victories and validate all champions!
          </p>
        </header>

        {/* Stats */}
        <div className="mb-6">
          <StatsBar {...stats} />
        </div>

        {/* Search and Actions */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              resultsCount={filteredChampions.length}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-lol-dark-2 hover:bg-lol-gold/20 border border-lol-gold/20 hover:border-lol-gold rounded-lg transition-colors flex items-center gap-2"
              title="Export data"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button
              onClick={handleImport}
              className="px-4 py-2 bg-lol-dark-2 hover:bg-lol-gold/20 border border-lol-gold/20 hover:border-lol-gold rounded-lg transition-colors flex items-center gap-2"
              title="Import data"
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <button
              onClick={handleClearAll}
              className="px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-500/20 hover:border-red-500 rounded-lg transition-colors flex items-center gap-2"
              title="Clear all"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Champions Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filteredChampions.map((champion) => (
            <ChampionCard
              key={champion.id}
              champion={champion}
              isValidated={validatedChampions.has(champion.id)}
              onToggle={handleToggleChampion}
              version={version}
            />
          ))}
        </div>

        {filteredChampions.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No champions found for "{searchTerm}"</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            LoL Arena Wins Tracker • Made with ❤️ for League of Legends players
          </p>
          <p className="mt-1">
            Data from{' '}
            <a
              href="https://developer.riotgames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lol-gold hover:underline"
            >
              Riot Games Data Dragon
            </a>{' '}
            • Version {version}
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
