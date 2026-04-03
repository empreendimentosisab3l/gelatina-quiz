import gelatinaImg from '../../assets/gelatina_mounjaro.jpg'

export default function IntroStep({ onNext }) {
  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      {/* Image with sparkles */}
      <div className="relative mb-6">
        <span className="absolute -top-3 -left-3 text-yellow-400 text-2xl sparkle">✦</span>
        <span className="absolute -top-1 right-0 text-yellow-400 text-lg sparkle sparkle-delay-1">✦</span>
        <span className="absolute bottom-2 -left-4 text-yellow-400 text-lg sparkle sparkle-delay-2">✦</span>
        <span className="absolute bottom-0 -right-3 text-yellow-400 text-xl sparkle sparkle-delay-3">✦</span>
        <img
          src={gelatinaImg}
          alt="Gelatina Mounjaro"
          className="w-56 h-56 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Vamos comecar sua jornada! 🚀
      </h2>

      {/* Subtitle */}
      <p className="text-muted-foreground text-center mb-8 px-4">
        Responda algumas perguntas rapidas para personalizar seu plano.
      </p>

      {/* Button */}
      <button
        onClick={onNext}
        className="btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full max-w-xs cursor-pointer transition-all duration-200 shadow-lg"
      >
        Vamos la! 💪
      </button>
    </div>
  )
}
