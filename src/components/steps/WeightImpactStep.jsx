import { useState } from 'react'

const options = [
  {
    emoji: '💔',
    label: 'Afeta minha autoestima',
    subtitle: 'Me sinto insegura com meu corpo',
  },
  {
    emoji: '🏥',
    label: 'Afeta minha saude',
    subtitle: 'Sinto cansaco, dores e falta de energia',
  },
  {
    emoji: '💑',
    label: 'Afeta meus relacionamentos',
    subtitle: 'Gera desconforto e situacoes sociais',
  },
  {
    emoji: '🏃',
    label: 'Afeta minha rotina',
    subtitle: 'Dificuldade em fazer tarefas simples',
  },
]

export default function WeightImpactStep({ onNext, onChange, name }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option.label)
    onChange('weightImpact', option.label)
    setTimeout(() => onNext(), 400)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        <span className="text-purple-600">{name || 'Voce'}</span>, como o peso{' '}
        <span className="text-purple-600">afeta sua vida</span>?
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Entender isso nos ajuda a criar seu protocolo ideal
      </p>

      <div className="w-full space-y-3">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleSelect(opt)}
            className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left ${
              selected === opt.label
                ? 'border-purple-500 bg-purple-50 option-selected'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-2xl mt-0.5">{opt.emoji}</span>
            <div className="flex-1">
              <span className="text-base font-bold text-gray-800 block">{opt.label}</span>
              <span className="text-sm text-gray-500">{opt.subtitle}</span>
            </div>
            {selected === opt.label && (
              <span className="ml-auto text-purple-500 text-xl mt-1">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
