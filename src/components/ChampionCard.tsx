import { Champion } from '@/types/champion'

interface ChampionCardProps {
  champion: Champion
  isValidated: boolean
  onToggle: (championId: string) => void
  version: string
}

export default function ChampionCard({ champion, isValidated, onToggle, version }: ChampionCardProps) {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`

  return (
    <div
      className={`champion-card ${isValidated ? 'validated' : ''}`}
      onClick={() => onToggle(champion.id)}
      title={`${champion.name} - ${champion.title}`}
    >
      <div className="aspect-square">
        <img
          src={imageUrl}
          alt={champion.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2">
        <p className="text-xs font-bold text-white truncate">{champion.name}</p>
      </div>
    </div>
  )
}
