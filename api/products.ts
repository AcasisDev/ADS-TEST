import type { VercelRequest, VercelResponse } from '@vercel/node';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  requiresPrescription: boolean;
  stock: number;
}

// Sample products data - replace with your database implementation
const products: Product[] = [
  {
    id: 1,
    name: "Paracetamol",
    price: 10000,
    description: "Obat untuk menurunkan demam dan meredakan nyeri",
    image: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg",
    category: "Obat Bebas",
    requiresPrescription: false,
    stock: 100
  },
  {
    id: 2,
    name: "Vitamin C",
    price: 25000,
    description: "Suplemen untuk meningkatkan daya tahan tubuh",
    image: "https://images.pexels.com/photos/3850810/pexels-photo-3850810.jpeg",
    category: "Vitamin & Suplemen",
    requiresPrescription: false,
    stock: 50
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle search and filtering
    const { search, category } = req.query;
    
    let filteredProducts = [...products];
    
    if (search) {
      const searchStr = String(search).toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchStr) ||
        product.description.toLowerCase().includes(searchStr)
      );
    }
    
    if (category && category !== 'Semua') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === category
      );
    }

    return res.status(200).json(filteredProducts);
  }

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  return res.status(405).json({ message: 'Method not allowed' });
}