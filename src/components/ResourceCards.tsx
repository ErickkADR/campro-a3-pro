import type { LicenseData } from '../types'
import { useReveal } from '../hooks/useReveal'

interface Props {
  license: LicenseData
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 2h12v2H6v-2z" />
    </svg>
  )
}

function ManualIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-5 8v-2h8v2H8zm0-4v-2h8v2H8z" />
    </svg>
  )
}

function EquipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14z" />
      <path d="M6 13h5v4H6zm0-6h12v4H6z" />
    </svg>
  )
}

export default function ResourceCards({ license }: Props) {
  const ref = useReveal()

  const cards = [
    {
      title: 'Software CâmeraCut',
      description: 'Programa oficial de controle da plotter. Instale no seu computador para começar a operar o equipamento.',
      buttonText: 'Baixar Programa',
      url: license.programUrl,
      cardIcon: <DownloadIcon />,
      btnIcon: <DownloadIcon />,
    },
    {
      title: 'Manual de Utilização',
      description: 'Guia completo de operação do software CâmeraCut: configurações, fluxo de trabalho e dicas de uso.',
      buttonText: 'Acessar Manual',
      url: license.manualUtilizacaoUrl,
      cardIcon: <ManualIcon />,
      btnIcon: <ManualIcon />,
    },
    {
      title: 'Manual do Equipamento',
      description: 'Documentação técnica da máquina: instalação, manutenção, especificações e solução de problemas.',
      buttonText: 'Acessar Manual',
      url: license.manualEquipamentoUrl,
      cardIcon: <EquipIcon />,
      btnIcon: <EquipIcon />,
    },
  ]

  return (
    <section ref={ref as unknown as React.RefObject<HTMLDivElement>} className="resources">
      <div className="resources-inner">
        {cards.map((card, i) => (
          <div key={card.title} className={`resource-card reveal reveal-d${i + 1}`}>
            <div className="card-icon">{card.cardIcon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a className="card-btn" href={card.url} target="_blank" rel="noopener noreferrer">
              {card.btnIcon}
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
