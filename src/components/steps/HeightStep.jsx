import { useState } from 'react'

export default function HeightStep({ onNext, onChange, value }) {
  const [height, setHeight] = useState(value || 165)

  const adjust = (amount) => {
    setHeight((prev) => {
      const next = Math.max(140, Math.min(200, prev + amount))
      onChange('height', next)
      return next
    })
  }

  const handleContinue = () => {
    onChange('height', height)
    onNext()
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Qual e sua altura?
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Precisamos disso para calcular seu IMC
      </p>

      {/* Height display */}
      <div className="flex items-center justify-center gap-1 mb-2">
        <span className="text-6xl font-bold text-purple-600">{height}</span>
        <span className="text-2xl text-gray-400 mt-4">cm</span>
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
