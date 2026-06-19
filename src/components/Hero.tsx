import heroImage from '../assets/hero.png'

interface HeroProps {
  licenseId: string
}

export default function Hero({ licenseId }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Campro A3 Pro Híbrida" />
      </div>
      <div className="hero-text">
        <span className="version-tag">Licença {licenseId}</span>
        <h1>Campro A3 Pro Híbrida</h1>
        <p>Baixe o software e acesse os manuais correspondentes à sua licença.</p>
      </div>
    </section>
  )
}
