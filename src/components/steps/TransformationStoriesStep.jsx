const testimonials = [
  {
    name: 'Giovanna',
    age: 28,
    lost: '12kg',
    emoji: '😍',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Perdi 12kg em 5 semanas! Nunca imaginei que seria tao facil.',
  },
  {
    name: 'Sandra',
    age: 45,
    lost: '8kg',
    emoji: '🥰',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Ja tinha tentado de tudo. A gelatina mudou minha vida!',
  },
  {
    name: 'Claudia',
    age: 37,
    lost: '15kg',
    emoji: '💃',
    stars: '⭐⭐⭐⭐⭐',
    quote: '15kg a menos e me sinto outra pessoa. Recomendo demais!',
  },
  {
    name: 'Patricia',
    age: 52,
    lost: '10kg',
    emoji: '🌟',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Mesmo com 52 anos consegui resultados incriveis!',
  },
]

export default function TransformationStoriesStep({ onNext }) {
  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Historias de{' '}
        <span className="text-purple-600">transformacao</span>
      </h2>
      <p className="text-muted-foreground text-center mb-6">
        Mulheres reais, resultados reais
      </p>

      <div className="w-full space-y-4 mb-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border-2 border-gray-100 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl">{t.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    {t.name}, {t.age} anos
                  </p>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                    -{t.lost}
                  </span>
                </div>
                <p className="text-xs">{t.stars}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">"{t.quote}"</p>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="btn-cta text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer border border-white/20 transition-transform duration-200"
      >
        Pegar meu protocolo ✨
      </button>
    </div>
  )
}
