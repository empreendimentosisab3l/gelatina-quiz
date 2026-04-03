import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo_mounjaro.png'

const faqItems = [
  {
    q: 'Como funciona a Gelatina Mounjaro?',
    a: 'A Gelatina Mounjaro utiliza ingredientes naturais que auxiliam na aceleracao do metabolismo e na reducao da absorcao de gordura, promovendo emagrecimento saudavel.',
  },
  {
    q: 'Em quanto tempo vou ver resultados?',
    a: 'A maioria das nossas clientes comeca a perceber diferenca ja nas primeiras 2 semanas de uso continuo, seguindo o protocolo completo.',
  },
  {
    q: 'Tem alguma contraindicacao?',
    a: 'A gelatina e feita com ingredientes 100% naturais. Porem, gestantes, lactantes e pessoas com condicoes especificas devem consultar um medico.',
  },
  {
    q: 'Como vou receber o protocolo?',
    a: 'Apos a compra, voce recebera acesso imediato ao app com o protocolo completo, receitas e todas as instrucoes passo a passo.',
  },
  {
    q: 'Posso fazer se tenho mais de 50 anos?',
    a: 'Sim! O protocolo e adaptavel para todas as idades. Temos milhares de clientes acima de 50 anos com otimos resultados.',
  },
  {
    q: 'E se eu nao gostar?',
    a: 'Voce tem 30 dias de garantia incondicional. Se nao ficar satisfeita, devolvemos 100% do seu dinheiro sem perguntas.',
  },
  {
    q: 'Preciso fazer exercicios?',
    a: 'O protocolo funciona mesmo sem exercicios intensos. Porem, a combinacao com atividades leves potencializa os resultados.',
  },
]

const checklistItems = [
  'Receita completa da Gelatina Mounjaro',
  'Protocolo de 30 dias passo a passo',
  'Acesso ao App exclusivo',
  'Lista de ingredientes completa',
  'Dicas de potencializacao',
  'Acesso vitalicio',
]

const bonusItems = [
  '🥗 3 Dietas completas para acelerar resultados',
  '🍰 Receitas de doces saudaveis',
  '🧘 Aulas de pilates para iniciantes',
]

const timelineWeeks = [
  {
    week: 'Semana 1',
    title: 'Desintoxe e primeiros resultados',
    badge: null,
  },
  {
    week: 'Semana 2',
    title: 'Perda de ate 3 kg',
    badge: null,
  },
  {
    week: 'Semana 3',
    title: 'Perda de 5 a 7kg',
    badge: null,
  },
  {
    week: 'Semana 4',
    title: 'Perda de 8 a 12 kg',
    badge: 'NOVO',
  },
]

export default function SalesPage({ data }) {
  const [timeLeft, setTimeLeft] = useState(600) // 10 min in seconds
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const timerStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const handleBuy = () => {
    window.open('https://red.track.monjarogelatina.shop/click', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky timer banner */}
      <div className="sticky top-0 z-50 bg-pink-500 text-white text-center py-2.5 px-4 shadow-md">
        <span className="text-sm font-semibold timer-pulse">
          🟢 Seu protocolo expira em: <span className="font-bold text-base">{timerStr}</span>
        </span>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6 pb-12">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logoImg} alt="Mounjaro" className="h-10" />
        </div>

        {/* Success icon */}
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl text-green-500">✓</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          {data.name || 'Voce'}, seu
        </h1>

        {/* Success box */}
        <div className="bg-green-50 border-2 border-green-400 rounded-xl p-4 text-center mb-4">
          <p className="text-lg font-bold text-green-700">
            Plano da Gelatina de 30 dias foi Gerado com Sucesso!
          </p>
        </div>

        <p className="text-gray-500 text-center text-sm mb-6">
          Seu plano exclusivo foi criado com base nas suas respostas. Aproveite a oferta especial abaixo!
        </p>

        {/* Before/After illustration */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="text-center">
              <div className="text-5xl mb-1">😔</div>
              <p className="text-sm text-gray-500 font-medium">Antes</p>
            </div>
            <div className="text-3xl text-purple-400">→</div>
            <div className="text-center">
              <div className="text-5xl mb-1">😍</div>
              <p className="text-sm text-gray-500 font-medium">Depois</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">Resultados podem variar de pessoa para pessoa</p>
        </div>

        {/* Timeline of weeks */}
        <div className="w-full mb-6">
          <div className="space-y-3">
            {timelineWeeks.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border-2 border-gray-100 rounded-xl p-4 shadow-sm"
              >
                {/* Week circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{item.week}</p>
                  <p className="text-xs text-gray-500">{item.title}</p>
                </div>
                {item.badge && (
                  <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Expected result badge */}
          <div className="mt-4 bg-purple-50 border-2 border-purple-200 rounded-xl p-3 text-center">
            <p className="text-sm font-bold text-purple-700">
              📊 Resultado esperado: -8 a 12 kg em 30 dias
            </p>
          </div>
        </div>

        {/* Product card */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
          <div className="p-5 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
              Seu Plano Exclusivo
            </p>
            <h3 className="text-xl font-bold mb-1">
              1 Mes de Tratamento 🍬
            </h3>
          </div>
          <div className="bg-white p-5">
            <h4 className="font-bold text-gray-800 text-center mb-4">
              Gelatina Mounjaro + APP Protocolo Completo
            </h4>
            <p className="text-xs text-center text-purple-600 font-semibold mb-4 uppercase tracking-wide">
              Acesso Vitalicio
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-4">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bonus section */}
        <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-5 mb-6">
          <h4 className="text-lg font-bold text-pink-600 text-center mb-3">
            🎁 Bonus Exclusivos
          </h4>
          <div className="space-y-2.5">
            {bonusItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm line-through mb-1">de R$109,00</p>
          <p className="text-sm text-gray-500 mb-1">por apenas</p>
          <p className="text-4xl font-bold text-green-600 mb-1">R$ 27,00</p>
          <p className="text-xs text-gray-400">ou 6x de R$5,32</p>
        </div>

        {/* CTA */}
        <button
          onClick={handleBuy}
          className="btn-cta text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer border border-white/20 transition-transform duration-200 mb-3"
        >
          QUERO COMECAR 🤩
        </button>

        <p className="text-xs text-gray-400 text-center mb-8">
          🔒 Compra 100% segura · Garantia de 30 dias
        </p>

        {/* Guarantee */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5 mb-8 text-center">
          <div className="text-4xl mb-2">🛡️</div>
          <h4 className="text-lg font-bold text-yellow-700 mb-2">
            Garantia de Reembolso
          </h4>
          <p className="text-sm text-gray-600">
            Se voce nao ficar satisfeita em <strong>30 dias</strong>, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
            Perguntas Frequentes
          </h4>
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-700 pr-4">{item.q}</span>
                  <span className="text-gray-400 text-lg flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 step-enter">
                    <p className="text-sm text-gray-500">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <button
          onClick={handleBuy}
          className="btn-cta text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer border border-white/20 transition-transform duration-200 mb-4"
        >
          QUERO COMECAR AGORA 🔥
        </button>

        {/* Trust badges */}
        <div className="flex flex-col items-center gap-2 text-xs text-gray-400 pb-4">
          <div className="flex items-center gap-3">
            <span>🔒 Compra Segura</span>
            <span>✓ Satisfacao Garantida</span>
          </div>
          <div className="flex items-center gap-3">
            <span>✓ 127.000+ clientes</span>
            <span>✓ 100% Natural</span>
          </div>
        </div>
      </div>
    </div>
  )
}
