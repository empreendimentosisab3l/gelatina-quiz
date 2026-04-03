export default function FinalCtaStep({ onNext, data }) {
  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      {/* Target emoji */}
      <div className="text-6xl mb-4">🎯</div>

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3 px-2">
        {data.name || 'Voce'}, voce gostaria de perder entre{' '}
        <span className="text-purple-600">8</span> e{' '}
        <span className="text-purple-600">11 kilos</span> em poucas semanas?
      </h2>

      <p className="text-muted-foreground text-center mb-8 px-4">
        Baseado no seu perfil, esse resultado e totalmente alcancavel com a Gelatina Mounjaro!
      </p>

      <button
        onClick={onNext}
        className="btn-cta text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer border border-white/20 transition-transform duration-200"
      >
        SIM! Quero muito comecar! 🔥
      </button>
    </div>
  )
}
