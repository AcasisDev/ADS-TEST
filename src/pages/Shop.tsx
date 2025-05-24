import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Send, LayoutGrid, List } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  requires_prescription: boolean;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  'Semua',
  'Obat Resep',
  'Obat Bebas',
  'Vitamin & Suplemen',
  'Alat Kesehatan',
  'Perawatan Pribadi'
];

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching products...'); // Debug log

      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('name', { ascending: true });

      if (fetchError) {
        console.error('Supabase error:', fetchError);
        throw new Error(fetchError.message);
      }

      console.log('Fetched products:', data); // Debug log
      
      if (!data || data.length === 0) {
        console.log('No products found in database');
      }

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again.');
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'Semua' || product.category === selectedCategory) &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    toast.success('Product added to cart');
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.success('Product removed from cart');
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (newQuantity > product.stock) {
      toast.error('Quantity exceeds available stock');
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCheckout = () => {
    const nomorWA = "6282245526622";
    const orderDetails = cart.map(item => 
      `${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const total = formatPrice(getTotalPrice());
    
    const message = `Hello, I would like to order:\n\nOrder Details:\n${orderDetails}\n\nTotal: ${total}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${nomorWA}?text=${encodedMessage}`, '_blank');
    
    setCart([]);
    toast.success('Order sent to WhatsApp');
  };

  const GridView = () => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-32 sm:h-40 object-cover"
          />
          <div className="p-4">
            <div className="flex flex-col mb-2">
              <h3 className="text-sm sm:text-base font-bold truncate">{product.name}</h3>
              <span className="text-sm sm:text-base font-bold text-emerald-600">
                {formatPrice(product.price)}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs">
                {product.category}
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`w-full sm:w-auto px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredProducts.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-24 sm:w-48 h-24 sm:h-48 object-cover"
          />
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <span className="text-sm text-gray-600">{product.category}</span>
              </div>
              <span className="text-lg font-bold text-emerald-600">
                {formatPrice(product.price)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Stock: {product.stock}
              </span>
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Health Products</h2>
          <p className="mt-2 text-gray-600">
            Find quality health products for you and your family
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white shadow-sm'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found</p>
          </div>
        ) : (
          viewMode === 'grid' ? <GridView /> : <ListView />
        )}

        {cart.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow p-4 sm:p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Shopping Cart
            </h3>
            
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-100 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-100 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4">
                <div className="text-xl font-bold">
                  Total: {formatPrice(getTotalPrice())}
                </div>
                <button
                  onClick={handleCheckout}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
                >
                  Checkout via WhatsApp
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;