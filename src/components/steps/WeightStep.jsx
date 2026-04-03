import { useState } from 'react'

export default function WeightStep({ onNext, onChange, value }) {
  const [weight, setWeight] = useState(value || 75)

  const adjust = (amount) => {
    setWeight((prev) => {
      const next = Math.max(45, Math.min(150, prev + amount))
      onChange('weight', next)
      return next
    })
  }

  const handleContinue = () => {
    onChange('weight', weight)
    onNext()
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Qual e seu peso atual?
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Seja sincera para um resultado preciso
      </p>

      {/* Weight display */}
      <div className="flex items-center justify-center gap-1 mb-2">
        <span className="text-6xl font-bold text-purple-600">{weight}</span>
        <span className="text-2xl text-gray-400 mt-4">kg</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={() => adjust(-5)}
          className="w-14 h-14 rounded-full bg-gray-100 text-gray-600 text-lg font-bold flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
        >
          -5
        </button>
        <button
          onClick={() => adjust(-1)}
          className="w-14 h-14 rounded-full bg-gray-100 text-gray-600 text-2xl font-bold flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
        >
          -
        </button>
        <button
          onClick={() => adjust(1)}
          className="w-14 h-14 rounded-full bg-gray-100 text-gray-600 text-2xl font-bold flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => adjust(5)}
          className="w-14 h-14 rounded-full bg-gray-100 text-gray-600 text-lg font-bold flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
        >
          +5
        </button>
      </div>

      <button
        onClick={handleContinue}
        className="btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg"
      >
        Continuar
      </button>
    </div>
  )
}
