import { ShoppingBag, TrendingUp, MessageCircle } from 'lucide-react';

const Links = () => {
  const links = [
    {
      title: 'Shopee',
      url: 'https://shopee.co.id/apotekdausehat',
      icon: ShoppingBag,
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'TikTok Shop',
      url: 'https://www.tiktok.com/@apotekdausehat',
      icon: TrendingUp,
      color: 'bg-black hover:bg-gray-900'
    },
    {
      title: 'GrabMart',
      url: 'https://grab.com/apotekdausehat',
      icon: ShoppingBag,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Katalog Produk',
      url: '/shop',
      icon: ShoppingBag,
      color: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      title: 'Konsultasi',
      url: 'https://wa.me/6282245526622',
      icon: MessageCircle,
      color: 'bg-emerald-600 hover:bg-emerald-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex flex-col items-center py-12 px-4">
      {/* Profile */}
      <div className="text-center mb-8">
        <div className="h-24 w-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
          A
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Apotek <span className="text-red-500">Dau Sehat</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Apotek terpercaya di Malang dengan layanan lengkap
        </p>
      </div>

      {/* Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`block w-full px-6 py-4 rounded-xl text-white font-medium transition-all transform hover:scale-105 ${link.color} flex items-center justify-between`}
          >
            <span className="text-lg">{link.title}</span>
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-600">
        <p>Jl. Margo Basuki, Jetis, Mulyoagung, Kec. Dau</p>
        <p>Kabupaten Malang, Jawa Timur</p>
        <p className="mt-2">Buka Setiap Hari: 07.00 - 21.00 WIB</p>
      </div>
    </div>
  );
};

export default Links;