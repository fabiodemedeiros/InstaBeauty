export interface Service {
  nome: string;
  duracao: string;
  preco: string;
  profissional: string;
  categoria: string;
  ativo: string;
  descricao: string;
}

export const getServiceIcon = (category: string) => {
  switch (category) {
    case 'Mãos e Pés':
      return 'hand';
    case 'Estética Facial':
      return 'face';
    case 'Depilação':
      return 'scissors';
    case 'Cabelos':
      return 'brush';
    case 'Maquiagem':
      return 'paintbrush';
    case 'Bem-estar':
      return 'heart';
    case 'Corporal':
      return 'scan';
    default:
      return 'sparkles';
  }
};

export const getServiceEmoji = (category: string, nome: string) => {
  // Emoji específico por serviço
  if (nome === 'Manicure' || nome === 'Pedicure' || nome === 'Unha em Gel' || nome === 'Spa dos Pés') {
    return '💅';
  }
  
  // Emoji por categoria
  switch (category) {
    case 'Mãos e Pés':
      return '💅';
    case 'Estética Facial':
      return '✨';
    case 'Depilação':
      return '✂️';
    case 'Cabelos':
      return '💇‍♀️';
    case 'Maquiagem':
      return '💄';
    case 'Bem-estar':
      return '💆‍♀️';
    case 'Corporal':
      return '🧖‍♀️';
    default:
      return '✨';
  }
};

export const getServiceImage = (category: string, nome: string) => {
  // Imagens específicas para serviços populares
  const images: Record<string, string> = {
    'Manicure': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800',
    'Pedicure': 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800',
    'Unha em Gel': 'https://images.unsplash.com/photo-1607779097040-a6d2f86d449c?q=80&w=800',
    'Design de sobrancelhas': 'https://images.unsplash.com/photo-1594742332333-7627a5ce30eb?q=80&w=800',
    'Limpeza de pele': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800',
    'Corte feminino': 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800',
    'Maquiagem social': 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800',
    'Massagem relaxante': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800',
  };
  
  // Retornar imagem específica ou imagem padrão pela categoria
  if (images[nome]) {
    return images[nome];
  }
  
  // Imagens padrão por categoria
  switch (category) {
    case 'Mãos e Pés':
      return 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800';
    case 'Estética Facial':
      return 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800';
    case 'Depilação':
      return 'https://images.unsplash.com/photo-1625441896755-6814c030367c?q=80&w=800';
    case 'Cabelos':
      return 'https://images.unsplash.com/photo-1560869713-2cc18de5a456?q=80&w=800';
    case 'Maquiagem':
      return 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800';
    case 'Bem-estar':
      return 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800';
    case 'Corporal':
      return 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800';
    default:
      return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800';
  }
};

export const getBenefits = (category: string, nome: string) => {
  // Benefícios específicos para serviços populares
  const serviceBenefits: Record<string, string[]> = {
    'Manicure': [
      'Unhas alinhadas e saudáveis',
      'Esmaltação duradoura com brilho profissional',
      'Hidratação que combate o ressecamento',
      'Sensação imediata de bem-estar'
    ],
    'Pedicure': [
      'Pés hidratados e renovados',
      'Remoção de calosidades',
      'Unhas bem cuidadas e esmaltadas',
      'Relaxamento e conforto para os pés'
    ],
    'Unha em Gel': [
      'Durabilidade de até 3 semanas',
      'Unhas naturalmente alongadas',
      'Acabamento impecável e brilhante',
      'Resistência a impactos e arranhões'
    ],
    'Design de sobrancelhas': [
      'Valorização do olhar',
      'Sobrancelhas harmônicas com seu rosto',
      'Definição perfeita',
      'Expressão facial equilibrada'
    ]
  };
  
  // Retornar benefícios específicos ou benefícios padrão pela categoria
  if (serviceBenefits[nome]) {
    return serviceBenefits[nome];
  }
  
  // Benefícios padrão por categoria
  switch (category) {
    case 'Mãos e Pés':
      return [
        'Aparência renovada e bem cuidada',
        'Hidratação intensiva',
        'Remoção de cutículas com segurança',
        'Bem-estar instantâneo'
      ];
    case 'Estética Facial':
      return [
        'Pele mais radiante e saudável',
        'Redução de imperfeições',
        'Revitalização facial completa',
        'Relaxamento e bem-estar'
      ];
    case 'Depilação':
      return [
        'Pele lisa por mais tempo',
        'Processo com menor desconforto',
        'Redução gradativa dos pelos',
        'Higiene e frescor prolongados'
      ];
    case 'Cabelos':
      return [
        'Cabelos mais saudáveis e brilhantes',
        'Corte personalizado ao seu estilo',
        'Tratamento específico para seu tipo de cabelo',
        'Aparência renovada e moderna'
      ];
    case 'Maquiagem':
      return [
        'Produtos de alta qualidade',
        'Técnicas profissionais exclusivas',
        'Valorização dos seus traços naturais',
        'Durabilidade garantida'
      ];
    case 'Bem-estar':
      return [
        'Alívio de tensões e estresse',
        'Relaxamento profundo',
        'Melhora da circulação',
        'Sensação de renovação e bem-estar'
      ];
    case 'Corporal':
      return [
        'Pele mais hidratada e renovada',
        'Relaxamento muscular',
        'Sensação de leveza',
        'Bem-estar por todo o corpo'
      ];
    default:
      return [
        'Atendimento personalizado',
        'Profissionais experientes',
        'Produtos de alta qualidade',
        'Experiência completa de bem-estar'
      ];
  }
};
