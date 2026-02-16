interface StatsBarProps {
  total: number
  validated: number
  remaining: number
  percentage: number
}

export default function StatsBar({ total, validated, remaining, percentage }: StatsBarProps) {
  return (
    <div className="bg-lol-dark-2 rounded-lg p-4 border border-lol-gold/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-gray-400 text-sm">Total</p>
          <p className="text-2xl font-bold text-lol-gold">{total}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Validated</p>
          <p className="text-2xl font-bold text-green-500">{validated}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Remaining</p>
          <p className="text-2xl font-bold text-red-500">{remaining}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Progress</p>
          <p className="text-2xl font-bold text-lol-blue">{percentage}%</p>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
