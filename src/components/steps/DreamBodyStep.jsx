import { useState } from 'react'

const options = [
  { emoji: '🏋️‍♀️', label: 'Em forma e definida' },
  { emoji: '🌿', label: 'Natural e saudavel' },
]

export default function DreamBodyStep({ onNext, onChange }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option.label)
    onChange('dreamBody', option.label)
    setTimeout(() => onNext(), 400)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Qual o <span className="text-purple-600">corpo</span> dos seus sonhos?
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Escolha sua meta.
      </p>

      <div className="w-full space-y-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left ${
              selected === opt.label
                ? 'border-purple-500 bg-purple-50 option-selected'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            <span className="text-lg font-medium text-gray-700">{opt.label}</span>
            {selected === opt.label && (
              <span className="ml-auto text-purple-500 text-xl">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
