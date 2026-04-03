export default function MethodExplanationStep({ onNext, name }) {
  const steps = [
    { icon: '😔', label: 'Antes', desc: 'Metabolismo lento' },
    { icon: '🍬', label: 'Gelatina Mounjaro', desc: 'Ativa o metabolismo' },
    { icon: '🔥', label: 'Queima natural', desc: 'Gordura derretendo' },
    { icon: '😍', label: 'Corpo dos sonhos', desc: 'Resultado real' },
  ]

  const benefits = [
    { icon: '✅', text: 'Facil de preparar' },
    { icon: '✅', text: '2x ao dia' },
    { icon: '✅', text: 'Receita 100% Natural' },
  ]

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Otimo, {name || 'querida'}!{' '}
        <span className="text-purple-600">Veja como funciona</span>
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        O metodo em 4 passos simples
      </p>

      {/* 4-step process */}
      <div className="w-full space-y-3 mb-6">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">{s.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-500 font-semibold">Passo {i + 1}</span>
              </div>
              <p className="font-semibold text-gray-800">{s.label}</p>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="text-purple-300 text-lg">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 w-full mb-8">
        <div className="space-y-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green-500">{b.icon}</span>
              <span className="text-sm font-medium text-gray-700">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg"
      >
        Entendi! Continuar
      </button>
    </div>
  )
}
