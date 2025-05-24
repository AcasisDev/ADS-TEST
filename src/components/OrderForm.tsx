import { useState } from 'react';
import { Send } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    keluhan: '',
    pesanan: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    nama: '',
    alamat: '',
    keluhan: '',
    pesanan: ''
  });
  
  // Sanitize input to prevent XSS
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
      .trim(); // Remove leading/trailing whitespace
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors = {
      nama: '',
      alamat: '',
      keluhan: '',
      pesanan: ''
    };

    let isValid = true;

    // Name validation
    if (!formData.nama) {
      newErrors.nama = 'Nama harus diisi';
      isValid = false;
    } else if (formData.nama.length < 2) {
      newErrors.nama = 'Nama minimal 2 karakter';
      isValid = false;
    } else if (formData.nama.length > 50) {
      newErrors.nama = 'Nama maksimal 50 karakter';
      isValid = false;
    } else if (!/^[a-zA-Z\s.]+$/.test(formData.nama)) {
      newErrors.nama = 'Nama hanya boleh mengandung huruf, spasi, dan titik';
      isValid = false;
    }

    // Address validation
    if (!formData.alamat) {
      newErrors.alamat = 'Alamat harus diisi';
      isValid = false;
    } else if (formData.alamat.length < 10) {
      newErrors.alamat = 'Alamat terlalu pendek';
      isValid = false;
    } else if (formData.alamat.length > 200) {
      newErrors.alamat = 'Alamat maksimal 200 karakter';
      isValid = false;
    }

    // Health complaint validation
    if (!formData.keluhan) {
      newErrors.keluhan = 'Keluhan harus diisi';
      isValid = false;
    } else if (formData.keluhan.length > 500) {
      newErrors.keluhan = 'Keluhan maksimal 500 karakter';
      isValid = false;
    }

    // Order validation
    if (!formData.pesanan) {
      newErrors.pesanan = 'Pesanan harus diisi';
      isValid = false;
    } else if (formData.pesanan.length > 1000) {
      newErrors.pesanan = 'Pesanan maksimal 1000 karakter';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [id]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Create WhatsApp message with rate limiting
    const nomorWA = "6282245526622";
    const pesan = 
      `Halo, saya ingin memesan obat.
      
Nama: ${formData.nama}
Alamat: ${formData.alamat}
Keluhan: ${formData.keluhan}
Pesanan: ${formData.pesanan}`;
    
    const encodedPesan = encodeURIComponent(pesan);
    const url = `https://wa.me/${nomorWA}?text=${encodedPesan}`;
    
    // Open WhatsApp in new window
    window.open(url, "_blank");
    
    // Reset form after brief delay
    setTimeout(() => {
      setFormData({
        nama: '',
        alamat: '',
        keluhan: '',
        pesanan: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="pesan" className="py-20 relative bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-70 -translate-x-20 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-70 translate-x-10 translate-y-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                Pesan Antar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Layanan Pesan Antar Cepat dan Praktis
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tidak sempat ke apotek? Gunakan layanan pesan antar kami melalui
                WhatsApp, praktis dan mudah langsung dari rumah Anda.
              </p>
              
              <div className="bg-emerald-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white mr-3 text-sm">1</span>
                  Cara Pemesanan
                </h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-700 ml-11">
                  <li>Isi lengkap formulir pesan antar</li>
                  <li>Klik tombol "Kirim via WhatsApp"</li>
                  <li>Anda akan diarahkan ke WhatsApp dengan pesan yang sudah disiapkan</li>
                  <li>Kirim pesan dan tunggu konfirmasi dari kami</li>
                  <li>Pesanan Anda akan segera diantar!</li>
                </ol>
              </div>
              
              <div className="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-amber-800">
                  Pastikan memberikan alamat lengkap untuk memudahkan pengantaran. Untuk obat resep, harap sertakan foto resep yang jelas.
                </p>
              </div>
            </div>
            
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform lg:-rotate-1 hover:rotate-0 transition-transform">
              <div className="h-3 bg-emerald-600"></div>
              <form onSubmit={handleSubmit} className="p-8">
                <h3 className="text-2xl font-bold mb-6">Form Pemesanan</h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.nama ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                      placeholder="Masukkan nama lengkap"
                      maxLength={50}
                      required
                    />
                    {errors.nama && (
                      <p className="mt-1 text-sm text-red-600">{errors.nama}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
                      Alamat Pengantaran
                    </label>
                    <input
                      type="text"
                      id="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.alamat ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                      placeholder="Masukkan alamat lengkap"
                      maxLength={200}
                      required
                    />
                    {errors.alamat && (
                      <p className="mt-1 text-sm text-red-600">{errors.alamat}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="keluhan" className="block text-sm font-medium text-gray-700 mb-1">
                      Keluhan Kesehatan/Alergi (jika ada)
                    </label>
                    <input
                      type="text"
                      id="keluhan"
                      value={formData.keluhan}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.keluhan ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                      placeholder="Riwayat alergi atau keluhan"
                      maxLength={500}
                      required
                    />
                    {errors.keluhan && (
                      <p className="mt-1 text-sm text-red-600">{errors.keluhan}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="pesanan" className="block text-sm font-medium text-gray-700 mb-1">
                      Daftar Obat/Produk yang Dipesan
                    </label>
                    <textarea
                      id="pesanan"
                      value={formData.pesanan}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.pesanan ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none`}
                      placeholder="Contoh: Paracetamol 500mg 10 tablet, Vitamin C 500mg 20 tablet"
                      maxLength={1000}
                      required
                    ></textarea>
                    {errors.pesanan && (
                      <p className="mt-1 text-sm text-red-600">{errors.pesanan}</p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-6 py-3 px-4 rounded-lg flex items-center justify-center font-semibold text-white transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Memproses...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Kirim via WhatsApp
                      <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;