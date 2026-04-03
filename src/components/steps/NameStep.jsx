import { useState } from 'react'

export default function NameStep({ onNext, onChange, value }) {
  const [name, setName] = useState(value || '')

  const handleContinue = () => {
    if (name.trim()) {
      onChange('name', name.trim())
      onNext()
    }
  }

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Qual e o seu nome?
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Para personalizarmos sua experiencia.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
        placeholder="Seu primeiro nome"
        className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors mb-8 text-center"
        autoFocus
      />

      <button
        onClick={handleContinue}
        disabled={!name.trim()}
        className={`btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg ${
          !name.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Continuar
      </button>
    </div>
  )
}
