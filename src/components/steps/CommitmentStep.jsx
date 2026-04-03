import { useState } from 'react'

const options = [
  { emoji: '😊', label: 'Sim me comprometo!' },
  { emoji: '💪', label: 'Quero comecar hoje' },
  { emoji: '🤔', label: 'Nao sei...' },
]

export default function CommitmentStep({ onNext }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (label) => {
    setSelected(label)
    setTimeout(() => onNext(), 400)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      {/* Before/After illustration */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-5 w-full text-center">
        <div className="flex items-center justify-center gap-6 mb-2">
          <div className="text-center">
            <div className="text-5xl mb-1">😔</div>
            <p className="text-xs text-gray-400 font-medium">Antes</p>
          </div>
          <div className="text-3xl text-purple-400">→</div>
          <div className="text-center">
            <div className="text-5xl mb-1">😍</div>
            <p className="text-xs text-gray-400 font-medium">Depois</p>
          </div>
        </div>
      </div>

      {/* Yellow badge */}
      <div className="bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full text-xs mb-4 text-center uppercase tracking-wide">
        Para liberar seu plano, preciso saber:
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6 px-2">
        Voce <span className="text-purple-600">se compromete</span> a aplicar o{' '}
        <span className="text-purple-600">protocolo</span> por pelo menos{' '}
        <span className="text-purple-600">1 semana</span> para poder ver os resultados?
      </h2>

      {/* Options */}
      <div className="w-full space-y-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt.label)}
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
