import { useState, useEffect } from 'react'

const checklist = [
  'Perfil metabolico definido',
  'Meta de peso registrada',
  'Compatibilidade confirmada',
  'Protocolo montado',
  'Bonus selecionados',
  'Oferta preparada',
]

export default function SecondLoadingStep({ onNext }) {
  const [progress, setProgress] = useState(0)
  const [completedItems, setCompletedItems] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onNext(), 600)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onNext])

  useEffect(() => {
    const step = 100 / checklist.length
    const done = Math.floor(progress / step)
    if (done > completedItems && done <= checklist.length) {
      setCompletedItems(done)
    }
  }, [progress, completedItems])

  // SVG circle params
  const radius = 55
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-8 flex-1">
      {/* Purple gradient card */}
      <div
        className="w-full rounded-2xl p-5 mb-6 text-center text-white shadow-lg"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        <p className="text-base font-bold leading-snug">
          Seu protocolo da Gelatina Mounjaro de 30 dias esta pronto!
        </p>
      </div>

      {/* Circular progress */}
      <div className="relative mb-8">
        <svg width="140" height="140" className="-rotate-90">
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#f3e8ff"
            strokeWidth="8"
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="url(#slGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="slGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-purple-600">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Checklist */}
      <div className="w-full space-y-3 px-4 mb-6">
        {checklist.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 transition-all duration-300 ${
              i < completedItems ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <span className={`text-xl ${i < completedItems ? 'text-green-500' : 'text-gray-300'}`}>
              {i < completedItems ? '✅' : '⬜'}
            </span>
            <span className={`text-base ${i < completedItems ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Waiting text */}
      <p className="text-sm text-gray-400 text-center animate-pulse">
        Aguarde enquanto finalizamos tudo para voce...
      </p>
    </div>
  )
}
