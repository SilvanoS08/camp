import facadeImg from '../assets/images/facade_exterior_1790202367963.jpg';
import livingImg from '../assets/images/interior_living_1790202378240.jpg';
import poolImg from '../assets/images/rooftop_pool_1790202388819.jpg';
import suiteImg from '../assets/images/master_suite_1790202401043.jpg';

// Form URL provided by the user
export const INTEREST_FORM_URL = "https://forms.gle/1ufoEyEVYn5CqJim8";

// Fallback high-resolution architecture images if any binary is omitted during git clone/deploy
export const FALLBACK_IMAGES = {
  facade: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
  living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  pool: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80",
  suite: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
};

// Bundled images processed directly by Vite
export const IMAGES = {
  facade: facadeImg,
  living: livingImg,
  pool: poolImg,
  suite: suiteImg,
};

export interface ApartmentPlan {
  id: string;
  name: string;
  category: "compact" | "family" | "duplex";
  size: number; // m²
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  startingPrice: string;
  description: string;
  features: string[];
  image: string;
  highlight?: string;
}

export const APARTMENT_PLANS: ApartmentPlan[] = [
  {
    id: "planta-smart",
    name: "Smart Residence",
    category: "compact",
    size: 54,
    bedrooms: 1,
    suites: 1,
    bathrooms: 1,
    parkingSpots: 1,
    startingPrice: "R$ 498.000",
    description: "Conceito aberto ultra moderno, perfeito para jovens executivos, casais ou investidores que buscam alta rentabilidade com locação premium.",
    features: [
      "Varanda gourmet integrada ao living",
      "Fechadura eletrônica com biometria",
      "Ponto para ar-condicionado na sala e suíte",
      "Vaga de garagem demarcada e coberta",
      "Tomada USB e infra para automação"
    ],
    image: IMAGES.living,
    highlight: "Excelente para Rentabilidade"
  },
  {
    id: "planta-comfort",
    name: "Comfort Living",
    category: "family",
    size: 82,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 2,
    startingPrice: "R$ 785.000",
    description: "Equilíbrio absoluto entre espaço e sofisticação. Planta inteligente com ampla varanda com churrasqueira a carvão e vista livre da cidade.",
    features: [
      "Varanda gourmet espaçosa com churrasqueira a carvão",
      "Suíte master com closet planejado",
      "Cozinha americana com bancada em granito",
      "2 vagas de garagem determinadas",
      "Piso nivelado entre sala e terraço"
    ],
    image: IMAGES.living,
    highlight: "Unidade Mais Procurada"
  },
  {
    id: "planta-prestige",
    name: "Prestige Family",
    category: "family",
    size: 118,
    bedrooms: 3,
    suites: 2,
    bathrooms: 3,
    parkingSpots: 2,
    startingPrice: "R$ 1.150.000",
    description: "Projetado para acolher sua família com o máximo de conforto, privacidade e luminosidade natural em todos os cômodos.",
    features: [
      "Hall privativo com elevador codificado",
      "2 amplas suítes com persianas de enrolar 100% blackout",
      "Varanda gourmet com bancada de apoio e duto exaustor",
      "Lavabo social independente",
      "Depósito privativo no subsolo de 4m²"
    ],
    image: IMAGES.suite,
    highlight: "Espaço & Privacidade"
  },
  {
    id: "planta-penthouse",
    name: "Penthouse Rooftop",
    category: "duplex",
    size: 184,
    bedrooms: 4,
    suites: 3,
    bathrooms: 4,
    parkingSpots: 3,
    startingPrice: "R$ 1.890.000",
    description: "A exclusividade no ponto mais alto. Cobertura duplex com solarium privativo, spa aquecido e vista espetacular 360° da metrópole.",
    features: [
      "Solarium privativo com hidromassagem e deck de madeira",
      "Pé-direito duplo no living com mezanino",
      "3 vagas soltas + ponto de recarga elétrica veicular",
      "Espaço gourmet exclusivo na cobertura",
      "Acabamentos premium em mármore e porcelanato 120x120"
    ],
    image: IMAGES.pool,
    highlight: "Edição Limitada"
  }
];

export interface Amenity {
  title: string;
  description: string;
  iconName: string;
  category: "lazer" | "bem-estar" | "praticidade";
  image: string;
}

export const AMENITIES: Amenity[] = [
  {
    title: "Piscina Infinity no Rooftop",
    description: "Piscina climatizada de borda infinita no 28º andar, com deck molhado e vista panorâmica inesquecível.",
    iconName: "Waves",
    category: "lazer",
    image: IMAGES.pool
  },
  {
    title: "Espaço Gourmet & Wine Lounge",
    description: "Ambiente sofisticado com adega climatizada, ilha gourmet e estrutura para chefs convidados.",
    iconName: "Coffee",
    category: "lazer",
    image: IMAGES.living
  },
  {
    title: "Fitness Center 24h",
    description: "Academia completa com equipamentos de última geração Life Fitness e espaço para pilates e ioga.",
    iconName: "Dumbbell",
    category: "bem-estar",
    image: IMAGES.facade
  },
  {
    title: "Coworking & Meeting Rooms",
    description: "Estações de trabalho equipadas com internet ultraveloz, cabines acústicas para chamadas e sala de reuniões.",
    iconName: "Zap",
    category: "praticidade",
    image: IMAGES.living
  },
  {
    title: "Spa & Sauna com Relax Lounge",
    description: "Sauna seca e a vapor, hidromassagem aquecida e sala para massagens terapêuticas.",
    iconName: "Sparkles",
    category: "bem-estar",
    image: IMAGES.suite
  },
  {
    title: "Mini Market & Delivery Room",
    description: "Conveniência grab & go no condomínio 24 horas por dia e espaço refrigerado para guardar encomendas.",
    iconName: "ShieldCheck",
    category: "praticidade",
    image: IMAGES.facade
  }
];

export interface LocationPoint {
  title: string;
  time: string;
  category: string;
}

export const LOCATION_POINTS: LocationPoint[] = [
  { title: "Parque Burle Marx / Ibirapuera", time: "3 min a pé", category: "Natureza & Lazer" },
  { title: "Estação de Metrô Linha Verde", time: "4 min a pé", category: "Mobilidade" },
  { title: "Shopping Pátio Jardins", time: "6 min de carro", category: "Compras & Entretenimento" },
  { title: "Colégio Dante & Porto Seguro", time: "5 min de carro", category: "Educação de Alto Nível" },
  { title: "Hospital Albert Einstein / Sírio", time: "8 min de carro", category: "Saúde & Excelência" },
  { title: "Polo Gastronômico & Bistrôs", time: "2 min a pé", category: "Gastronomia" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Como garanto a condição exclusiva de tabela de lançamento?",
    answer: "Basta clicar no botão 'Tenho Interesse' e preencher o formulário oficial. Nossa equipe de especialistas entrará em contato prioritário com você para reservar sua unidade com os valores da Tabela Zero de lançamento antes da abertura oficial ao público."
  },
  {
    question: "Quais são as facilidades e formas de pagamento durante a obra?",
    answer: "Oferecemos fluxo de pagamento altamente flexível durante o período de obras, com entrada facilitada, parcelas mensais, balões anuais e financiamento bancário do saldo devedor na entrega das chaves, com possibilidade de uso do FGTS."
  },
  {
    question: "É possível personalizar a planta e os acabamentos do apartamento?",
    answer: "Sim! Disponibilizamos o programa de personalização com diversas opções de plantas (como sala ampliada ou suíte master expandida) e kits de acabamentos pré-aprovados pela nossa equipe de arquitetura, tudo entregue pronto na chave."
  },
  {
    question: "Como funciona a visita ao apartamento decorado?",
    answer: "O stand com apartamento modelo decorado em escala real está aberto para visitas com agendamento VIP. Ao preencher o formulário 'Tenho Interesse', você recebe um convite com concierge exclusivo e estacionamento com manobrista cortesia."
  },
  {
    question: "As vagas de garagem são livres ou travadas? Há depósito privativo?",
    answer: "Todas as unidades contam com vagas de garagem determinadas e vinculadas em escritura (sem sorteio ou rodízio). As unidades a partir de 82m² possuem depósito privativo no subsolo."
  }
];
