import gelatinaImg from '../../assets/gelatina_mounjaro.jpg'

export default function ConfirmationStep({ onNext, data }) {
  const targetWeight = (data.weight || 75) - 10

  return (
    <div className="flex flex-col items-center pt-6 pb-8 flex-1">
      {/* Images */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={gelatinaImg}
          alt="Gelatina"
          className="w-28 h-28 object-cover rounded-2xl shadow-md"
        />
        <div className="text-5xl">✅</div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
        Esse e um otimo objetivo, {data.name || 'querida'}! 💜
      </h2>

      {/* Goal display */}
      <div className="bg-purple-50 rounded-xl p-4 w-full mb-4 text-center">
        <p className="text-lg font-semibold text-purple-700">
          Meta: {data.weight || 75}kg → {targetWeight}kg
        </p>
        <p className="text-sm text-purple-500">(-10kg)</p>
      </div>

      {/* Text */}
      <p className="text-muted-foreground text-center mb-8 px-2">
        Com base nas suas respostas, voce pode comecar a ver resultados logo nas primeiras semanas seguindo nosso protocolo personalizado.
      </p>

      <button
        onClick={onNext}
        className="btn-purple text-white text-lg font-bold py-4 px-8 rounded-xl w-full cursor-pointer transition-all duration-200 shadow-lg"
      >
        Ok, Vamos la! 🚀
      </button>
    </div>
  )
}
