import { useState, useEffect, useRef } from 'react'

const PLAYER_ID = '69d019079a320eec0638178a'
const SCRIPT_SRC = `https://scripts.converteai.net/7519d23b-8afe-41cb-99c7-d411e4dcdb71/players/${PLAYER_ID}/v4/player.js`
const DELAY_SECONDS = 145 // VSL 2 = 2:25

export default function VslProtocolStep({ onNext, name }) {
  const [canContinue, setCanContinue] = useState(false)
  const listenerRef = useRef(false)

  useEffect(() => {
    // Inject Vturb player script once
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      document.head.appendChild(script)
    }

    // Use Vturb displayHiddenElements API with persist cache
    const tryAttach = () => {
      if (listenerRef.current) return
      const player = document.getElementById(`vid-${PLAYER_ID}`)
      if (!player) return

      const onReady = () => {
        player.displayHiddenElements(DELAY_SECONDS, ['.vsl2-hidden'], {
          persist: true,
        })
      }
      player.addEventListener('player:ready', onReady)

      const handleEnd = () => setCanContinue(true)
      player.addEventListener('ended', handleEnd)
      player.addEventListener('videoended', handleEnd)
      listenerRef.current = true

      cleanupRef.current = () => {
        player.removeEventListener('player:ready', onReady)
        player.removeEventListener('ended', handleEnd)
        player.removeEventListener('videoended', handleEnd)
      }
    }

    const cleanupRef = { current: null }
    const interval = setInterval(tryAttach, 300)
    tryAttach()

    // Observe when Vturb reveals the hidden element
    const observer = new MutationObserver(() => {
      const el = document.querySelector('.vsl2-hidden')
      if (el && el.style.display !== 'none') {
        setCanContinue(true)
      }
    })
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['style'] })

    // Fallback timer in case Vturb API fails entirely
    const fallbackTimer = setTimeout(() => setCanContinue(true), (DELAY_SECONDS + 5) * 1000)

    return () => {
      clearTimeout(fallbackTimer)
      clearInterval(interval)
      observer.disconnect()
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [])

  return (
    <div className="flex flex-col items-center pt-4 pb-8 flex-1">
      {/* Green checkmark circle */}
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 text-center mb-3 px-2">
        <span className="text-green-600">{name || 'Voce'}</span>, Seu protocolo foi feito com Sucesso!
      </h2>

      {/* Green info box */}
      <div className="w-full bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-4 text-center">
        <p className="text-green-700 font-semibold text-sm">
          ✅ Assista o video de 3 minutos para pegar o seu Protocolo Personalizado
        </p>
      </div>

      {/* Yellow badge */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-5 py-2.5 rounded-full text-sm mb-4 shadow-md">
        Clique no video para Assistir ⬇️
      </div>

      {/* Vturb Player */}
      <div className="w-full mb-4 shadow-xl rounded-2xl overflow-hidden">
        <vturb-smartplayer
          id={`vid-${PLAYER_ID}`}
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
        />
      </div>

      {/* Lock message */}
      <div className="w-full mb-6">
        {!canContinue && (
          <p className="text-sm text-gray-500 text-center mt-2 font-medium">
            🔒 Assista para pegar seu plano
          </p>
        )}
        {canContinue && (
          <p className="text-sm text-green-600 text-center mt-2 font-medium">
            ✅ Video concluido!
          </p>
        )}
      </div>

      {/* Hidden element controlled by Vturb displayHiddenElements */}
      <div className="vsl2-hidden" style={{ display: 'none' }} />

      {canContinue && (
        <button
          onClick={onNext}
          className="w-full text-white text-lg font-bold py-4 px-8 rounded-xl cursor-pointer transition-all duration-200 shadow-lg step-enter"
          style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        >
          Pegar meu Plano! 🤩
        </button>
      )}
    </div>
  )
}
