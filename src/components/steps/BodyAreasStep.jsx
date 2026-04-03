import { useState } from 'react'
import famosaImg from '../../assets/famosa_materia.png'

const areas = [
  { emoji: '😊', label: 'Papada' },
  { emoji: '💪', label: 'Bracos' },
  { emoji: '🍑', label: 'Barriga' },
  { emoji: '🌺', label: 'Cintura' },
  { emoji: '🍑', label: 'Gluteos' },
  { emoji: '🦵', label: 'Coxas' },
  { emoji: '✨', label: 'Corpo Todo' },
]

export default function BodyAreasStep({ onNext, onChange }) {
  const [selected, setSelected] = useState([])

  const toggleArea = (label) => {
    const next = selected.includes(label)
      ? selected.filter((a) => a !== label)
      : [...selected, label]
    setSelected(next)
    onChange('bodyAreas', next)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-1">
        Quais as areas que voce{' '}
        <span className="text-purple-600">mais quer perder gordura</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-5">
        Toque nas areas desejadas.
      </p>

      <div className="w-full space-y-2 mb-4">
        {areas.map((area) => (
          <button
            key={area.label}
            onClick={() => toggleArea(area.label)}
            className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left ${
              selected.includes(area.label)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-xl">{area.emoji}</span>
            <span className="text-base font-medium text-gray-700">{area.label}</span>
            {selected.includes(area.label) && (
              <span className="ml-auto text-purple-500 text-lg">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Body image shown when selections made */}
      {selected.length > 0 && (
        <div className="mb-4 step-enter">
          <img
            src={famosaImg}
            alt="Areas selecionadas"
            className="w-full max-w-[280px] mx-auto rounded-xl"
          />
        </div>
      )}

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
