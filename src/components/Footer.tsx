import { Phone, Mail, Instagram, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden mr-3">
                <div className="text-emerald-600 font-bold text-xl">A</div>
              </div>
              <h3 className="text-xl font-bold">
                Apotek <span className="text-red-400">Dau Sehat</span>
              </h3>
            </div>
            <p className="text-emerald-100 mb-6">
              Apotek terpercaya yang menyediakan berbagai macam obat berkualitas dengan
              pelayanan profesional untuk kesehatan Anda dan keluarga.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/apotekdausehat" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:apotekdausehat@gmail.com"
                className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:082245526622"
                className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center hover:bg-white hover:text-emerald-600 transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-emerald-700 pb-2">
              Menu Utama
            </h3>
            <ul className="space-y-3">
              {['Beranda', 'Tentang', 'Layanan', 'Kontak', 'Testimoni'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-emerald-100 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-emerald-700 pb-2">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              {[
                'Penjualan Obat',
                'Konsultasi Kesehatan',
                'Pengantaran Obat',
                'Konsultasi via WhatsApp',
                'Home Pharmacy Care'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#layanan"
                    className="text-emerald-100 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-emerald-700 pb-2">
              Kontak Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-emerald-100">
                  Jl. Margo Basuki, Jetis, Mulyoagung, Kec. Dau, Kabupaten Malang, Jawa Timur
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-emerald-100">0822-4552-6622</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-emerald-100">apotekdausehat@gmail.com</span>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.me/6282245526622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-lg inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-emerald-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Apotek Dau Sehat. All rights reserved.
            </p>
            <p className="text-emerald-200 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for your health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;