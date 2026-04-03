import { useState, useEffect, useRef } from 'react'

const PLAYER_ID = '69cd7f7227faeae80a040f27'
const SCRIPT_SRC = `https://scripts.converteai.net/7519d23b-8afe-41cb-99c7-d411e4dcdb71/players/${PLAYER_ID}/v4/player.js`
const DELAY_SECONDS = 71 // VSL 1 = 1:11

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

    // Use Vturb displayHiddenElements API with persist cache
    const tryAttach = () => {
      if (listenerRef.current) return
      const player = document.getElementById(`vid-${PLAYER_ID}`)
      if (!player) return

      const onReady = () => {
        player.displayHiddenElements(DELAY_SECONDS, ['.vsl1-hidden'], {
          persist: true,
        })
      }
      player.addEventListener('player:ready', onReady)

      // Also listen for ended as additional trigger
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
      const el = document.querySelector('.vsl1-hidden')
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

      {/* Hidden element controlled by Vturb displayHiddenElements */}
      <div className="vsl1-hidden" style={{ display: 'none' }} />

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
