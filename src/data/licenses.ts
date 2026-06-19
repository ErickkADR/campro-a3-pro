import type { LicenseData, ApplicationItem } from '../types'

const SHARED_MANUALS = {
  manualUtilizacaoUrl:
    'https://drive.google.com/file/d/1-C-JPVzTt8dwkXJQKu69bK1iX-iX_jGe/view?usp=sharing',
  manualEquipamentoUrl:
    'https://drive.google.com/file/d/10bmQzoW2lJvC7x8P7D_xU_Vx8mp5xNOS/view?usp=sharing',
}

export const LICENSES: Record<string, LicenseData> = {
  '1981': {
    id: '1981',
    programUrl:
      'https://drive.google.com/file/d/1XHg0JermCjbqjttn09PaSSi4LoYdNCaK/view?usp=sharing',
    ...SHARED_MANUALS,
  },
  '0981': {
    id: '0981',
    programUrl:
      'https://drive.google.com/file/d/1zVWarLl6D5Q3CaXY-ZnJ_Nj5uY9m8fGE/view?usp=sharing',
    ...SHARED_MANUALS,
  },
}

export const APPLICATIONS: ApplicationItem[] = [
  {
    title:
      'Rótulos adesivos em folha com meio corte preciso com a plotter de recorte, para destacar marcas no balcão.',
    description:
      'Você entrega rótulos com destaque fácil, padrão profissional e repetição consistente, mesmo em lotes maiores.',
    imageUrl:
      'https://bannerjet.com.br/wp-content/uploads/2026/05/x-A3-PRO-APLICACAO-1.webp',
    imageAlt: 'Rótulos adesivos em folha',
  },
  {
    title:
      'Adesivos recortados em vinil para brindes, vitrines e campanhas, com contorno fiel ao layout e pronto para colar.',
    description:
      'Recorte formas complexas com precisão, acelerando produção de adesivos que impressionam e vendem mais.',
    imageUrl:
      'https://bannerjet.com.br/wp-content/uploads/2026/05/x-A3-PRO-APLICACAO-2.webp',
    imageAlt: 'Adesivos recortados em vinil',
  },
  {
    title:
      'Caixas e embalagens pequenas em papel cartão com dobras perfeitas pelo vinco dedicado, além de tags, cartões e materiais promocionais com corte sob medida.',
    description:
      'Finalize peças promocionais com acabamentos perfeitos, deixando o material pronto para uso e com alto padrão.',
    imageUrl:
      'https://bannerjet.com.br/wp-content/uploads/2026/06/A3-PRO-HIBRIDA-APLICACAO-1.webp',
    imageAlt: 'Caixas e embalagens em papel cartão',
  },
]
