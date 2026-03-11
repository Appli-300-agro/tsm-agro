// Catalogue de 100 produits pour TSM AGRO
// Images sélectionnées pour leur haute qualité et leur pertinence

const CATEGORY_IMAGES = {
  'Semences Elite': ['https://images.unsplash.com/photo-1523348837708-15d4a09cfac2','https://images.unsplash.com/photo-1592982537447-7440770cbfc9','https://images.unsplash.com/photo-1574943320219-553eb213f72d'],
  'Matériel Pro': ['https://images.unsplash.com/photo-1500382017468-9049fed747ef','https://images.unsplash.com/photo-1533460004989-cef01064af7c','https://images.unsplash.com/photo-1530267981375-f0de937f5f13'],
  'Engrais Bio': ['https://images.unsplash.com/photo-1628352081506-83c43123ed6d','https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d','https://images.unsplash.com/photo-1591989330748-7f76ca9e1244'],
  'Conseil Agro': ['https://images.unsplash.com/photo-1464226184884-fa280b87c399','https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad','https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5']
};

const DISH_NAMES = {
  'Semences Elite': ['Maïs Hybride F1', 'Semences de Soja Certifiées', 'Plants de Bananier', 'Graines de Tomate Pro'],
  'Matériel Pro': ['Motopompe 5HP', 'Broyeur de Maïs', 'Système Irrigation Goutte-à-goutte', 'Presse à Huile'],
  'Engrais Bio': ['Fiente de Volaille Compostée', 'Engrais Liquide Bio', 'Fertilisant NPK Naturel', 'Compost Premium'],
  'Conseil Agro': ['Audit de Rendement', 'Plan de Fertilisation', 'Gestion Sanitaire Cultures', 'Formation Technique']
};
const sectorKeys = Object.keys(DISH_NAMES);

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const sector = sectorKeys[i % sectorKeys.length];
    const names = DISH_NAMES[sector];
    const images = CATEGORY_IMAGES[sector];
    const dishBaseName = names[i % names.length];
    const imageUrl = images[i % images.length];
    const productName = `${dishBaseName} ${i > names.length ? '#' + i : ''}`.trim();

    products.push({
      id: `prod-${i}`,
      name: productName,
      description: `Découvrez notre ${dishBaseName}, une solution de la catégorie ${sector} proposée par TSM AGRO. Qualité garantie.`,
      price: 15000 + (Math.floor(Math.random() * 500) * 1000),
      category: sector,
      imageUrl: `${imageUrl}?auto=format&fit=crop&q=80&w=800`,
      stock: Math.floor(Math.random() * 50) + 10,
      featured: i % 8 === 0
    });
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = sectorKeys;

export const MOCK_DELIVERERS = [
  { id: 'dev-1', name: 'Abdoulaye', phone: '+237 670 00 00 01', zone: 'Douala (Akwa/Deido)' },
  { id: 'dev-2', name: 'Samuel', phone: '+237 690 00 00 02', zone: 'Yaoundé (Bastos/Mvan)' },
  { id: 'dev-3', name: 'Christian', phone: '+237 650 00 00 03', zone: 'Douala (Bonapriso/Logbessou)' }
];

export const MOCK_USERS_LIST = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'user', status: 'Actif', joinDate: '12/01/2026' },
  { id: 'u2', name: 'Marie Sissoko', email: 'marie.s@email.com', role: 'user', status: 'Actif', joinDate: '15/01/2026' },
  { id: 'u3', name: 'Aubry Admin', email: 'admin@assequip.cm', role: 'admin', status: 'Actif', joinDate: '01/01/2026' },
  { id: 'u4', name: 'Alain Kotto', email: 'alain.k@email.com', role: 'user', status: 'Inactif', joinDate: '20/01/2026' },
  { id: 'u5', name: 'Inès Kamga', email: 'ines.k@email.com', role: 'user', status: 'Actif', joinDate: '02/02/2026' },
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    customer: 'Jean Dupont',
    date: '2026-02-04',
    total: 450000,
    status: 'En préparation',
    items: [{ name: 'Prestation Traiteur Prestige', quantity: 1, price: 450000 }]
  },
  {
    id: 'ORD-2026-002',
    customer: 'Marie Sissoko',
    date: '2026-02-03',
    total: 125000,
    status: 'Livré',
    items: [{ name: 'Menu Dégustation Signature', quantity: 1, price: 125000 }]
  }
];
