import { useReveal } from '../hooks/useReveal'

export default function VideoSection() {
  const ref = useReveal()

  return (
    <section ref={ref as unknown as React.RefObject<HTMLDivElement>} className="video-section">
      <div className="video-inner reveal">
        <h2>Veja o equipamento em ação</h2>
        <p>Assista à apresentação completa da Campro A3 Pro Híbrida</p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/UKKqN8rScZc?start=137"
            title="Apresentação Campro A3 Pro Híbrida"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
