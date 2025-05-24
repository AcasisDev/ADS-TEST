import { Pill, HeartPulse, Truck, MessageCircle, ShieldCheck, Home } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const services = [
    {
      icon: <Pill className="w-14 h-14" />,
      title: "Penjualan Obat",
      description: "Menyediakan berbagai macam obat resep dan non-resep dengan kualitas terjamin dan harga bersaing.",
      features: ["Obat resep", "Obat non-resep", "Vitamin & suplemen", "Peralatan medis", "Kualitas terjamin"]
    },
    {
      icon: <HeartPulse className="w-14 h-14" />,
      title: "Konsultasi Kesehatan",
      description: "Layanan konsultasi kesehatan dengan apoteker profesional untuk informasi penggunaan obat yang tepat.",
      features: ["Konsultasi gratis", "Apoteker berpengalaman", "Saran penggunaan obat", "Interaksi obat", "Efek samping"]
    },
    {
      icon: <Truck className="w-14 h-14" />,
      title: "Pengantaran Obat",
      description: "Layanan pengantaran obat cepat ke rumah Anda untuk kenyamanan belanja tanpa harus keluar rumah.",
      features: ["Pengantaran cepat", "Area Dau dan sekitarnya", "Pembayaran mudah", "Kemasan aman", "Lacak pesanan"]
    },
    {
      icon: <MessageCircle className="w-14 h-14" />,
      title: "Konsultasi via WhatsApp",
      description: "Konsultasi dan pemesanan obat melalui WhatsApp untuk kemudahan akses kapanpun dan dimanapun.",
      features: ["Respons cepat", "24/7 layanan", "Pemesanan mudah", "Konsultasi langsung", "Resep digital"]
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: "Jaminan Kualitas",
      description: "Semua produk kami dijamin keasliannya dan kualitasnya dengan masa kadaluarsa yang panjang.",
      features: ["Produk asli", "Masa kadaluarsa panjang", "Penyimpanan standar", "Harga terjangkau", "Garansi produk"]
    },
    {
      icon: <Home className="w-14 h-14" />,
      title: "Home Pharmacy Care",
      description: "Konsultasi obat, edukasi kesehatan, dan pemantauan terapi kini bisa dilakukan tanpa harus keluar rumah.",
      features: ["Kunjungan ke rumah", "Evaluasi obat", "Pemantauan terapi", "Edukasi keluarga", "Penyesuaian dosis"]
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-emerald-50 relative">
      {/* Decoration */}
      <div className="absolute top-0 inset-x-0 h-24 bg-white rounded-b-[50%] -translate-y-12 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Produk & Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Layanan <span className="text-emerald-600">Unggulan</span> Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan berbagai layanan untuk memenuhi kebutuhan kesehatan
            Anda dengan profesionalisme tinggi dan dedikasi penuh.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex overflow-x-auto gap-2 md:gap-4 pb-4 mb-8 justify-center">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-emerald-100'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                {services[activeTab].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{services[activeTab].title}</h3>
              <p className="text-gray-600 mb-8 text-lg">{services[activeTab].description}</p>
              
              <div className="space-y-3">
                {services[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a
                  href="#pesan"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition-all"
                >
                  Gunakan Layanan Ini
                </a>
              </div>
            </div>
            
            <div className="bg-emerald-600 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white"></div>
              </div>
              
              <div className="relative z-10 text-white max-w-md">
                <h4 className="text-2xl font-bold mb-4">Mengapa Memilih Kami?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Pelayanan profesional oleh apoteker berpengalaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Jaminan keaslian dan kualitas produk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Harga terjangkau dan transparan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Layanan cepat dan ramah</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-emerald-600 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Pengantaran cepat dan pengepakan aman</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                activeTab === index 
                  ? 'ring-2 ring-emerald-600 bg-white' 
                  : 'bg-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  activeTab === index ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 line-clamp-2">{service.description}</p>
              </div>
              <div className={`h-1.5 w-full ${activeTab === index ? 'bg-emerald-600' : 'bg-emerald-100 group-hover:bg-emerald-200'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;