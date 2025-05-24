import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "images/foto_depan.jpg",
      alt: "Pharmacy interior"
    },
    {
      src: "images/foto_staff_3.jpg",
      alt: "Pharmacist helping customer"
    },
    {
      src: "images/foto_staff_2.jpg",
      alt: "Pharmacy medicines"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="beranda" className="relative pt-20 lg:pt-0 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-emerald-600 block lg:inline">Kesehatan</span>{" "}
              Anda adalah{" "}
              <span className="text-red-600 block lg:inline">Prioritas</span> Kami
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              Memberikan pelayanan kesehatan terbaik dengan keramahan, profesionalisme,
              dan kualitas produk terjamin untuk Anda dan keluarga.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#pesan"
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group"
              >
                Pesan Obat Sekarang
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#layanan"
                className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all"
              >
                Lihat Layanan Kami
              </a>
            </div>
            
            <div className="flex items-center gap-4 justify-center lg:justify-start mt-8">
              <span className="text-gray-600">Buka Setiap Hari:</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-medium rounded-full text-sm">
                07.00 - 21.00 WIB
              </span>
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img 
                    src={slide.src} 
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ))}
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500 rounded-full opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;