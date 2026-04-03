import { useState } from 'react'

const goals = [
  { emoji: '⚡', label: 'Ter mais energia' },
  { emoji: '👗', label: 'Usar roupas que amo' },
  { emoji: '💖', label: 'Melhorar autoestima' },
  { emoji: '💪', label: 'Ter mais saude' },
  { emoji: '🦋', label: 'Me sentir mais leve' },
  { emoji: '✨', label: 'Receber elogios' },
]

export default function GoalsStep({ onNext, onChange }) {
  const [selected, setSelected] = useState([])

  const toggleGoal = (label) => {
    const next = selected.includes(label)
      ? selected.filter((g) => g !== label)
      : [...selected, label]
    setSelected(next)
    onChange('goals', next)
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        O que voce quer conquistar?
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Selecione seus maiores objetivos
      </p>

      <div className="w-full grid grid-cols-2 gap-3 mb-8">
        {goals.map((goal) => (
          <button
            key={goal.label}
            onClick={() => toggleGoal(goal.label)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              selected.includes(goal.label)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-purple-300'
            }`}
          >
            <span className="text-3xl">{goal.emoji}</span>
            <span className="text-sm font-medium text-gray-700 text-center">{goal.label}</span>
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
