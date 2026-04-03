export default function SocialProofStep({ onNext }) {
  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Sim, ate as famosas estao usando! ⭐
      </h2>
      <p className="text-muted-foreground text-center mb-6 px-2">
        A Gelatina Mounjaro e tendencia entre celebridades e influenciadoras.
      </p>

      {/* Fake G1 news card */}
      <div className="w-full bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden mb-8">
        {/* Red header */}
        <div className="bg-red-600 px-4 py-2">
          <span className="text-white font-bold text-lg">g1</span>
          <span className="text-white/80 text-sm ml-2">SAUDE</span>
        </div>
        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-bold text-gray-800 leading-snug mb-2">
            Simone Mendes revela segredo: &quot;Perdi 14kg com gelatina especial em apenas 5 semanas&quot;
          </h3>
          <p className="text-sm text-gray-500">
            Cantora sertaneja surpreende fas ao mostrar transformacao e creditar resultado a suplemento natural que virou febre entre celebridades.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
            <span>📰 Publicado ha 2 horas</span>
            <span>•</span>
            <span>Leitura: 3 min</span>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg"
      >
        Continuar
      </button>
    </div>
  )
}
