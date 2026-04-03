import { useState, useEffect, useRef } from 'react'

const PLAYER_ID = '69cd7f7227faeae80a040f27'
const SCRIPT_SRC = `https://scripts.converteai.net/7519d23b-8afe-41cb-99c7-d411e4dcdb71/players/${PLAYER_ID}/v4/player.js`
const VIDEO_DURATION_MS = 75000 // VSL 1 = 1:11 + 4s margem

export default function VideoStep({ onNext }) {
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

    // Fallback timer: libera botao apos duracao do video
    const fallbackTimer = setTimeout(() => setCanContinue(true), VIDEO_DURATION_MS)

    // Poll until the custom element is upgraded and listen for video end
    const tryAttach = () => {
      if (listenerRef.current) return
      const el = document.getElementById(`vid-${PLAYER_ID}`)
      if (!el) return

      const handleEnd = () => setCanContinue(true)

      el.addEventListener('ended', handleEnd)
      el.addEventListener('videoended', handleEnd)
      listenerRef.current = true

      cleanupRef.current = () => {
        el.removeEventListener('ended', handleEnd)
        el.removeEventListener('videoended', handleEnd)
      }
    }

    const cleanupRef = { current: null }
    const interval = setInterval(tryAttach, 300)
    tryAttach()

    return () => {
      clearTimeout(fallbackTimer)
      clearInterval(interval)
      if (cleanupRef.current) cleanupRef.current()
    }
  }, [])

  return (
    <div className="flex flex-col items-center pt-4 pb-8 flex-1">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-3 px-2">
        Agora assista a explicacao rapida de{' '}
        <span className="text-purple-600 font-extrabold">1 Minuto</span>{' '}
        e entenda por que esse metodo esta chamando atencao 👀
      </h2>

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
            🔒 Assista o video para continuar
          </p>
        )}
        {canContinue && (
          <p className="text-sm text-green-600 text-center mt-2 font-medium">
            ✅ Video concluido!
          </p>
        )}
      </div>

      {canContinue && (
        <button
          onClick={onNext}
          className="w-full text-white text-lg font-bold py-4 px-8 rounded-xl cursor-pointer transition-all duration-200 shadow-lg step-enter"
          style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
        >
          Entendi, quero continuar! 😍
        </button>
      )}
    </div>
  )
}
