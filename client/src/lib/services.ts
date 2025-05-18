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
