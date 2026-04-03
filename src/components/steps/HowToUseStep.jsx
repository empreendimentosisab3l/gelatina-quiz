export default function HowToUseStep({ onNext }) {
  const steps = [
    { num: '1', icon: '📋', title: 'Receba o protocolo', desc: 'Acesse o passo a passo completo no app' },
    { num: '2', icon: '🍬', title: 'Prepare a gelatina', desc: 'Receita simples e rapida de fazer' },
    { num: '3', icon: '✨', title: 'Tome 2x ao dia', desc: 'Manha e noite para resultados maximos' },
  ]

  const timeline = [
    { time: '☀️ Manha', desc: 'Tome a primeira porcao em jejum' },
    { time: '☀️ Dia', desc: 'Siga a alimentacao do protocolo' },
    { time: '🌙 Noite', desc: 'Tome a segunda porcao antes de dormir' },
  ]

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Como usar a{' '}
        <span className="text-purple-600">Gelatina Mounjaro</span>
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Simples, pratico e eficaz
      </p>

      {/* 3 Steps */}
      <div className="w-full space-y-4 mb-6">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center flex-shrink-0">
              {s.num}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">
                {s.icon} {s.title}
              </p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-purple-50 rounded-xl p-4 w-full mb-8">
        <h4 className="font-bold text-purple-700 text-center mb-3">
          Sua rotina diaria
        </h4>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-semibold text-purple-600 w-20">{t.time}</span>
              <div className="h-px bg-purple-200 flex-1" />
              <span className="text-sm text-gray-700">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="btn-cta text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer border border-white/20 transition-transform duration-200"
      >
        Sim, eu me comprometo!
      </button>
    </div>
  )
}
