import { useState } from 'react'

const routines = [
  { emoji: '🏢', label: 'Trabalho fora de casa' },
  { emoji: '🏠', label: 'Home office' },
  { emoji: '👨‍👩‍👧', label: 'Cuido da casa/familia' },
  { emoji: '📚', label: 'Estudo' },
]

export default function DailyRoutineStep({ onNext, onChange }) {
  const [selected, setSelected] = useState([])

  const toggleRoutine = (label) => {
    const next = selected.includes(label)
      ? selected.filter((r) => r !== label)
      : [...selected, label]
    setSelected(next)
    onChange('routine', next)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Como e sua <span className="text-purple-600">rotina diaria</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Selecione todas que se aplicam
      </p>

      <div className="w-full space-y-3 mb-8">
        {routines.map((item) => (
          <button
            key={item.label}
            onClick={() => toggleRoutine(item.label)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left ${
              selected.includes(item.label)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="text-lg font-medium text-gray-700">{item.label}</span>
            {selected.includes(item.label) && (
              <span className="ml-auto text-purple-500 text-xl">✓</span>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className={`btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg ${
          selected.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Continuar
      </button>
    </div>
  )
}
