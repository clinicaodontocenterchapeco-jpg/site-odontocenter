export type Treatment = {
  id: string;
  index: string;
  title: string;
  description: string;
  slug: string;
  whatsappMessage: string;
};

export const treatments = [
  {
    id: "implantes",
    index: "01",
    title: "Implantes dentários",
    description: "Planejamento para recuperar função, estética e confiança.",
    slug: "implantes",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Implantes Dentários. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "proteses",
    index: "02",
    title: "Próteses dentárias",
    description: "Soluções individualizadas para reabilitação do sorriso.",
    slug: "proteses",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Próteses Dentárias. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "ortodontia",
    index: "03",
    title: "Ortodontia",
    description: "Alinhamento e equilíbrio para diferentes fases da vida.",
    slug: "ortodontia",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Ortodontia. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "lentes-contato-dental",
    index: "04",
    title: "Lentes de contato dental",
    description: "Estética e planejamento para um sorriso mais harmônico.",
    slug: "lentes-contato-dental",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Lentes de Contato Dental. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "facetas",
    index: "05",
    title: "Facetas",
    description: "Correções estéticas pensadas de forma personalizada.",
    slug: "facetas",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Facetas. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "tratamento-canal",
    index: "06",
    title: "Tratamento de canal",
    description: "Cuidado para preservar dentes comprometidos e aliviar sintomas.",
    slug: "tratamento-canal",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Tratamento de Canal. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "clareamento-dental",
    index: "07",
    title: "Clareamento dental",
    description: "Planejamento para um sorriso visualmente mais claro.",
    slug: "clareamento-dental",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Clareamento Dental. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "limpeza-prevencao",
    index: "08",
    title: "Limpeza e prevenção",
    description: "Cuidado preventivo para preservar a saúde bucal.",
    slug: "limpeza-prevencao",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Limpeza e Prevenção. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "restauracoes",
    index: "09",
    title: "Restaurações",
    description: "Recuperação de forma e função com planejamento individual.",
    slug: "restauracoes",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Restaurações. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
  {
    id: "botox-preenchimento",
    index: "10",
    title: "Botox e preenchimento",
    description: "Procedimentos estéticos realizados conforme avaliação profissional.",
    slug: "botox-preenchimento",
    whatsappMessage:
      "Olá! Vim pelo site da Odonto Center e gostaria de saber mais sobre Botox e Preenchimento. Poderiam me passar mais informações e me orientar sobre uma avaliação?",
  },
] satisfies Treatment[];
