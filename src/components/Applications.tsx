import { useReveal } from '../hooks/useReveal'
import { APPLICATIONS } from '../data/licenses'

export default function Applications() {
  const ref = useReveal()

  return (
    <section ref={ref as unknown as React.RefObject<HTMLDivElement>} className="aplicacoes">
      <div className="aplicacoes-inner">
        <div className="aplicacoes-header reveal">
          <h2>Aplicações da A3 Pro Híbrida que criam itens vendáveis com acabamento superior</h2>
          <p>Itens que a gráfica produz em A4, A3 e Super A3 com plotter de recorte, meio corte e fluxo contínuo</p>
        </div>
        <div className="aplicacoes-grid">
          {APPLICATIONS.map((app, i) => (
            <div key={i} className={`aplic-card reveal reveal-d${i + 1}`}>
              <img src={app.imageUrl} alt={app.imageAlt} />
              <div className="aplic-card-body">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
