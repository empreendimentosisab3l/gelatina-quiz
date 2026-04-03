import { useState, useEffect } from 'react'

const messages = [
  'Analisando suas respostas...',
  'Verificando compatibilidade hormonal...',
  'Calculando metabolismo basal...',
  'Preparando seu plano personalizado...',
]

export default function LoadingStep({ onNext }) {
  const [progress, setProgress] = useState(0)
  const [msgIndex, setMsgIndex] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => onNext(), 500)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(progressTimer)
  }, [onNext])

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length)
    }, 1500)
    return () => clearInterval(msgTimer)
  }, [])

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)
    return () => clearInterval(dotTimer)
  }, [])

  // SVG circle params
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-8 flex-1">
      {/* Circular progress */}
      <div className="relative mb-8">
        <svg width="160" height="160" className="-rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#f3e8ff"
            strokeWidth="10"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-purple-600">{progress}%</span>
        </div>
      </div>

      {/* Message */}
      <p className="text-lg font-medium text-gray-700 text-center mb-2 min-h-[28px]">
        {messages[msgIndex]}
      </p>

      <p className="text-muted-foreground text-center">
        Aguarde um momento{dots}
      </p>
    </div>
  )
}
