import { Champion } from '@/types/champion'

const STORAGE_KEY = 'lol-arena-validated-champions'

export const storage = {
  getValidatedChampions(): Set<string> {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? new Set(JSON.parse(data)) : new Set()
    } catch (error) {
      console.error('Error loading validated champions:', error)
      return new Set()
    }
  },

  saveValidatedChampions(championIds: Set<string>): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(championIds)))
    } catch (error) {
      console.error('Error saving validated champions:', error)
    }
  },

  toggleChampion(championId: string): Set<string> {
    const validated = this.getValidatedChampions()
    if (validated.has(championId)) {
      validated.delete(championId)
    } else {
      validated.add(championId)
    }
    this.saveValidatedChampions(validated)
    return validated
  },

  clearAll(): void {
    localStorage.removeItem(STORAGE_KEY)
  },

  exportData(): string {
    const validated = Array.from(this.getValidatedChampions())
    return JSON.stringify({
      version: '1.0',
      exportDate: new Date().toISOString(),
      validatedChampions: validated
    }, null, 2)
  },

  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData)
      if (data.validatedChampions && Array.isArray(data.validatedChampions)) {
        this.saveValidatedChampions(new Set(data.validatedChampions))
        return true
      }
      return false
    } catch (error) {
      console.error('Error importing data:', error)
      return false
    }
  }
}

export const championUtils = {
  filterChampions(champions: Champion[], searchTerm: string): Champion[] {
    const term = searchTerm.toLowerCase().trim()
    if (!term) return champions

    return champions.filter(champ => 
      champ.name.toLowerCase().includes(term) ||
      champ.title.toLowerCase().includes(term)
    )
  },

  sortChampions(champions: Champion[]): Champion[] {
    return [...champions].sort((a, b) => a.name.localeCompare(b.name))
  },

  getStats(champions: Champion[], validatedIds: Set<string>) {
    const total = champions.length
    const validated = validatedIds.size
    const remaining = total - validated
    const percentage = total > 0 ? Math.round((validated / total) * 100) : 0

    return { total, validated, remaining, percentage }
  }
}
