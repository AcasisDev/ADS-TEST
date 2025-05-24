import { useState } from 'react';
import { ShoppingCart, Send } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  requiresPrescription: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Shop = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Sample products - replace with your actual products
  const products: Product[] = [
    {
      id: 1,
      name: "Paracetamol",
      price: 10000,
      description: "Obat untuk menurunkan demam dan meredakan nyeri",
      image: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg",
      category: "Obat Bebas",
      requiresPrescription: false
    },
    {
      id: 2,
      name: "Vitamin C",
      price: 25000,
      description: "Suplemen untuk meningkatkan daya tahan tubuh",
      image: "https://images.pexels.com/photos/3850810/pexels-photo-3850810.jpeg",
      category: "Suplemen",
      requiresPrescription: false
    }
  ];

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
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
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
    
    const message = `Halo, saya ingin memesan obat:
    
Detail Pesanan:
${orderDetails}

Total: ${total}

Mohon konfirmasi ketersediaan dan total pembayaran. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${nomorWA}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Toko Online
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Produk <span className="text-emerald-600">Kesehatan</span> Kami
          </h2>
          <p className="text-lg text-gray-600">
            Temukan berbagai produk kesehatan berkualitas untuk Anda dan keluarga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="text-emerald-600 font-semibold">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                    {product.category}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart */}
        {cart.length > 0 && (
          <div className="mt-16 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Keranjang Belanja
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
                      Hapus
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
    </section>
  );
};

export default Shop;