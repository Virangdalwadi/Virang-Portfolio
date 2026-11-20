export interface CustomProject {
  id: string;
  name: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  languages: string[];
  topics: string[];
  image?: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  technologies?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  year?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  relatedProjects?: string[];
  siteUrl: string;
  siteType: 'demo';
  isCustom: true;
}

export const customProjects: CustomProject[] = [
  {
    id: 'flipkart-clone',
    name: 'Flipkart Clone',
    title: 'Flipkart Clone',
    titleFr: 'Clone de Flipkart',
    description: 'Full-stack MERN e-commerce application with product listings, product details, cart functionality, REST APIs, and MongoDB.',
    descriptionFr: 'Application e-commerce MERN avec catalogue et détails des produits, panier, API REST et MongoDB.',
    languages: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    topics: ['MERN', 'E-commerce'],
    siteUrl: 'https://flipkart-clone-6bsn.vercel.app/',
    siteType: 'demo',
    isCustom: true,
  },
  {
    id: 'airbnb-clone',
    name: 'Airbnb Clone',
    title: 'Airbnb Clone',
    titleFr: 'Clone d’Airbnb',
    description: 'React.js recreation of a vacation rental listing interface.',
    descriptionFr: 'Recréation avec React.js d’une interface de réservation de logements de vacances.',
    languages: ['React.js'],
    topics: ['React'],
    siteUrl: 'https://airbnb-clone-ptm25dx16-virangdalwadi.vercel.app/',
    siteType: 'demo',
    isCustom: true,
  },
  {
    id: 'netflix-clone',
    name: 'Netflix Clone',
    title: 'Netflix Clone',
    titleFr: 'Clone de Netflix',
    description: 'Streaming platform UI recreation with a browsable content layout.',
    descriptionFr: 'Recréation d’une interface de plateforme de streaming avec un catalogue de contenus.',
    languages: ['React.js'],
    topics: ['React'],
    siteUrl: 'https://netflix-clone-nine-psi-61.vercel.app/',
    siteType: 'demo',
    isCustom: true,
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    title: 'Weather App',
    titleFr: 'Application météo',
    description: 'Weather application that retrieves live weather information through a public weather API.',
    descriptionFr: 'Application météo qui récupère des informations météorologiques en temps réel via une API publique.',
    languages: ['Weather API'],
    topics: ['API'],
    siteUrl: 'https://weather-app-beryl-theta-pbrsdhobub.vercel.app/',
    siteType: 'demo',
    isCustom: true,
  },
  {
    id: 'apple-clone',
    name: 'Apple Clone',
    title: 'Apple Clone',
    titleFr: 'Clone d’Apple',
    description: 'Responsive recreation of Apple’s product landing page.',
    descriptionFr: 'Recréation adaptative d’une page de présentation de produit Apple.',
    languages: [],
    topics: [],
    siteUrl: 'https://apppple-clone.netlify.app/',
    siteType: 'demo',
    isCustom: true,
  },
];
