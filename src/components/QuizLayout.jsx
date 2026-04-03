import logoImg from '../assets/logo_mounjaro.png'

export default function QuizLayout({ step, totalSteps, onBack, children }) {
  const progress = Math.min(((step) / totalSteps) * 100, 100)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md px-4 pt-3 pb-2">
        <div className="flex items-center justify-between mb-2">
          {/* Back button */}
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <span className="text-lg">&larr;</span>
          </button>

          {/* Logo */}
          <img src={logoImg} alt="Mounjaro" className="h-8" />

          {/* Spacer */}
          <div className="w-9" />
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #a855f7, #7c3aed)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-md px-4 flex-1 flex flex-col step-enter" key={step}>
        {children}
      </div>
    </div>
  )
}
