import logoImg from '../../assets/logo_mounjaro.png'
import heroImg from '../../assets/quiz_intro.png'

export default function LandingPage({ onNext }) {
  return (
    <main className="bg-white min-h-screen">
      <section className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 pt-2 pb-12">
        <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center">
          {/* Logo */}
          <img
            src={logoImg}
            alt="Mounjaro Gelatina"
            className="w-40 sm:w-52 h-auto mb-2"
          />

          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Gelatina Mounjaro"
            className="w-88 sm:w-[26rem] h-auto mb-4 relative z-10"
          />

          {/* Description */}
          <p className="text-muted-foreground text-center mb-3 px-2">
            Descubra como ativar seu metabolismo e perder ate{' '}
            <strong className="text-primary">12kg em 30 dias</strong> com a{' '}
            <strong className="text-primary">Gelatina Mounjaro</strong>!
          </p>

          {/* CTA Button */}
          <button
            onClick={onNext}
            className="btn-cta text-white text-base font-bold py-4 px-6 rounded-xl w-full max-w-[400px] mb-6 cursor-pointer border border-white/20 transition-transform duration-200"
          >
            <span className="whitespace-nowrap">
              Quero saber se funciona para mim! 🔥
            </span>
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ 127.000+ mulheres</span>
            <span>•</span>
            <span>✓ 100% Natural</span>
          </div>
        </div>
      </section>
    </main>
  )
}
