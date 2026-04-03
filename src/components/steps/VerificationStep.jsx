import { useState, useEffect } from 'react'

const checklist = [
  'Analisando suas respostas',
  'Calculando seu deficit calorico',
  'Selecionando ingredientes ideais',
  'Verificacao concluida!',
]

export default function VerificationStep({ onNext }) {
  const [progress, setProgress] = useState(0)
  const [completedItems, setCompletedItems] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onNext(), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onNext])

  useEffect(() => {
    if (progress >= 25 && completedItems < 1) setCompletedItems(1)
    if (progress >= 50 && completedItems < 2) setCompletedItems(2)
    if (progress >= 75 && completedItems < 3) setCompletedItems(3)
    if (progress >= 100 && completedItems < 4) setCompletedItems(4)
  }, [progress, completedItems])

  const radius = 55
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-8 flex-1">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        Verificando seus dados...
      </h2>

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
            stroke="url(#vGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
      <div className="w-full space-y-3 px-4">
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
    </div>
  )
}
