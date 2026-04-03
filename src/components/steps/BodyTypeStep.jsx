import { useState } from 'react'

const options = [
  { emoji: '🙋‍♀️', label: 'Medio' },
  { emoji: '👩', label: 'Plus Size' },
  { emoji: '🧍‍♀️', label: 'Acima do peso' },
  { emoji: '🏋️‍♀️', label: 'Sobrepeso' },
]

export default function BodyTypeStep({ onNext, onChange }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option.label)
    onChange('bodyType', option.label)
    setTimeout(() => onNext(), 400)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Como voce classifica o seu <span className="text-purple-600">corpo</span>?
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Selecione a opcao que mais se encaixa
      </p>

      <div className="w-full grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              selected === opt.label
                ? 'border-purple-500 bg-purple-50 option-selected'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-3xl">{opt.emoji}</span>
            <span className="text-sm font-medium text-gray-700 text-center">{opt.label}</span>
            {selected === opt.label && (
              <span className="text-purple-500 text-lg">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
