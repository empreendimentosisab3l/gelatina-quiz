export default function BmiResultsStep({ onNext, data }) {
  const weight = data.weight || 75
  const heightM = (data.height || 165) / 100
  const bmi = (weight / (heightM * heightM)).toFixed(1)
  const name = data.name || 'Voce'

  let riskLevel = ''
  let riskColor = ''
  let riskBg = ''
  if (bmi < 18.5) {
    riskLevel = 'Abaixo do peso'
    riskColor = 'text-blue-600'
    riskBg = 'bg-blue-50'
  } else if (bmi < 25) {
    riskLevel = 'Peso normal'
    riskColor = 'text-green-600'
    riskBg = 'bg-green-50'
  } else if (bmi < 30) {
    riskLevel = 'Sobrepeso'
    riskColor = 'text-orange-600'
    riskBg = 'bg-orange-50'
  } else {
    riskLevel = 'Obesidade'
    riskColor = 'text-red-600'
    riskBg = 'bg-red-50'
  }

  const warnings = [
    'Metabolismo desacelerado',
    'Risco de acumulo de gordura visceral',
    'Hormonios de saciedade desregulados',
  ]

  const benefits = [
    'Receita 100% Natural',
    'Ativa o GLP-1 do seu corpo',
    'Queima de Gordura localizada',
    'Regula seu Metabolismo',
    'Leveza e corpo Desintoxicado',
    'Menos Impulsos por doces',
    'Facil de fazer e seguir',
  ]

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Resultado da sua{' '}
        <span className="text-purple-600">analise</span>,{' '}
        <span className="text-purple-600">{name}</span>
      </h2>

      {/* BMI display */}
      <div className={`rounded-2xl p-6 w-full mb-4 text-center ${riskBg}`}>
        <p className="text-sm text-gray-500 mb-1">Seu IMC:</p>
        <p className={`text-5xl font-extrabold mb-2 ${riskColor}`}>{bmi}</p>
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${riskColor} bg-white/60`}>
          {riskLevel}
        </span>
      </div>

      {/* Yellow warning box */}
      <div className="w-full bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-4">
        <p className="font-bold text-yellow-800 mb-3 text-sm">
          ⚠️ Sinais de alerta identificados:
        </p>
        <div className="space-y-2">
          {warnings.map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-red-500 text-sm">🔴</span>
              <span className="text-sm text-gray-700">{w}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Green info box - GLP-1 */}
      <div className="w-full bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-6">
        <p className="text-sm text-green-800 font-semibold text-center">
          💡 O segredo para ativar o GLP-1: A Gelatina Mounjaro e o "Interruptor" hormonal natural!
        </p>
      </div>

      {/* Benefits section */}
      <div className="w-full mb-6">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
          Beneficios da <span className="text-purple-600">Gelatina Mounjaro</span> 🔥
        </h3>
        <div className="space-y-2.5">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span className="text-sm text-gray-700 font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial card */}
      <div className="w-full bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-8">
        <div className="flex items-center gap-3">
          {/* Placeholder for before/after photo */}
          <div className="w-16 h-16 rounded-xl bg-yellow-200 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">📸</span>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm">
              "Perdi 13kg em 5 semanas!"
            </p>
            <p className="text-xs text-gray-500 mt-1">- Maria, 32 anos, Sao Paulo</p>
            <p className="text-xs text-yellow-500 mt-0.5">⭐⭐⭐⭐⭐</p>
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
