import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telepon",
      value: "0822-4552-6622",
      link: "tel:082245526622",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "apotekdausehat@gmail.com",
      link: "mailto:apotekdausehat@gmail.com",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@apotekdausehat",
      link: "https://instagram.com/apotekdausehat",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Alamat",
      value: "Jl. Margo Basuki, Jetis, Mulyoagung, Kec. Dau, Kabupaten Malang, Jawa Timur",
      link: "https://maps.google.com/?q=Apotek+Dau+Sehat+Malang",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Jam Operasional",
      value: "Senin - Minggu, 07.00 - 21.00 WIB",
      link: null,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGIzODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2NmgtNnYtNmg2em0tNiA2SDI0djZoNnYtNnptMzAgMzBoNnYtNmgtNnY2em0tNiAwdjZoNnYtNmgtNnpNMjQgNjBoNnYtNmgtNnY2em0wLTZoLTZ2Nmg2di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Kontak Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ada Pertanyaan? Hubungi Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami siap membantu Anda dengan pertanyaan seputar produk, layanan, atau kebutuhan kesehatan lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              target={item.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md ${!item.link ? 'cursor-default' : ''}`}
            >
              <div className="flex items-start">
                <div className={`${item.color} rounded-full p-3 mr-4`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-12">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Ingin Mendapatkan Informasi Terbaru?</h3>
              <p className="text-white/80 mb-8">
                Ikuti akun sosial media kami untuk mendapatkan informasi terbaru tentang promo, produk baru, dan tips kesehatan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://instagram.com/apotekdausehat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center"
                >
                  <Instagram className="mr-2 w-5 h-5" />
                  Ikuti Instagram Kami
                </a>
                <a 
                  href="https://wa.me/6282245526622" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;