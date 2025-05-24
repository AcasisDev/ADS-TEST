import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Saya selalu membeli obat di Dau Sehat karena pelayanannya ramah dan obatnya dijamin asli. Harganya juga bersaing dengan apotek lain.",
      name: "Budi Santoso",
      role: "Pelanggan Setia",
      avatar: "B",
    },
    {
      quote: "Layanan konsultasi kesehatannya sangat membantu. Apotekernya sabar menjelaskan detail penggunaan obat untuk keluarga saya.",
      name: "Siti Aminah",
      role: "Ibu Rumah Tangga",
      avatar: "S",
    },
    {
      quote: "Pengiriman obat cepat sekali sampai rumah, sangat membantu di saat saya sakit dan tidak bisa keluar rumah. Terima kasih Dau Sehat!",
      name: "Dimas Prayoga",
      role: "Pekerja Kantoran",
      avatar: "D",
    },
    {
      quote: "Konsultasi via WhatsApp sangat praktis, respon cepat, dan obat-obatan berkualitas. Tidak ragu lagi berlangganan di Apotek Dau Sehat.",
      name: "Ratna Dewi",
      role: "Pelanggan Baru",
      avatar: "R",
    },
    {
      quote: "Pelayanan Home Pharmacy Care sangat membantu untuk orangtua saya yang lansia dan sulit ke apotek. Tim Dau Sehat sangat profesional.",
      name: "Agus Hermawan",
      role: "Pelanggan Loyal",
      avatar: "A",
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };
  
  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apa Kata <span className="text-emerald-600">Pelanggan</span> Kami
          </h2>
          <p className="text-lg text-gray-600">
            Pendapat jujur dari pelanggan kami tentang pengalaman mereka
            menggunakan layanan dan produk Dau Sehat.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-red-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                {/* Quote icon */}
                <svg className="w-12 h-12 text-emerald-500 opacity-20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/>
                </svg>
                
                {/* Rating stars */}
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial carousel */}
              <div className="overflow-hidden relative h-auto">
                <div 
                  className="transition-all duration-500 ease-in-out transform"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation controls */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-emerald-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Lihat testimoni ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                  aria-label="Testimoni selanjutnya"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Sudah Menggunakan Layanan Kami?</h3>
            <p className="text-gray-600 mb-6">
              Bagikan pengalaman Anda dengan menghubungi kami melalui WhatsApp atau Instagram.
            </p>
            <a 
              href="https://wa.me/6282245526622" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all"
            >
              Berikan Testimoni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;