import { useState } from 'react'

const barriers = [
  { emoji: '⏰', label: 'Falta de tempo' },
  { emoji: '🍫', label: 'Falta de autocontrole' },
  { emoji: '💰', label: 'Questoes financeiras' },
  { emoji: '🔄', label: 'Falta de constancia' },
]

export default function BarriersStep({ onNext, onChange }) {
  const [selected, setSelected] = useState([])

  const toggleBarrier = (label) => {
    const next = selected.includes(label)
      ? selected.filter((b) => b !== label)
      : [...selected, label]
    setSelected(next)
    onChange('barriers', next)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        O que te impede de emagrecer?
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Selecione todas as barreiras que voce enfrenta
      </p>

      <div className="w-full space-y-3 mb-8">
        {barriers.map((item) => (
          <button
            key={item.label}
            onClick={() => toggleBarrier(item.label)}
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
