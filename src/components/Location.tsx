import { useState } from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section id="lokasi" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Lokasi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kunjungi Apotek Dau Sehat
          </h2>
          <p className="text-lg text-gray-600">
            Temukan kami di lokasi yang strategis dan mudah dijangkau.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 bg-emerald-600 text-white flex flex-col justify-center">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-white opacity-80" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Alamat Kami</h3>
              <p className="mb-6 opacity-90">
                Jl. Margo Basuki, Jetis, Mulyoagung, Kec. Dau, Kabupaten Malang, Jawa Timur
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span>Senin - Minggu: 07.00 - 21.00 WIB</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span>Telepon: 0822-4552-6622</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span>Email: apotekdausehat@gmail.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Apotek+Dau+Sehat+Malang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                >
                  Petunjuk Arah di Google Maps
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative min-h-[400px]">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <svg className="animate-spin mx-auto h-10 w-10 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-3 text-gray-600">Memuat peta...</p>
                  </div>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7522840961897!2d112.5899158!3d-7.9209230999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881339dd816b9%3A0x17c144a37634ed01!2sApotek%20Dau%20Sehat!5e0!3m2!1sen!2sid!4v1745241316719!5m2!1sen!2sid"
                className="w-full h-full min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
                title="Lokasi Apotek Dau Sehat"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;