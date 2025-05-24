import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      // Handle hash navigation
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // If we're not on the home page, navigate home first
      if (location.pathname !== '/') {
        navigate('/');
      }
    } else {
      // Handle regular route navigation
      navigate(path);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Tentang', path: '/#tentang' },
    { name: 'Layanan', path: '/#layanan' },
    { name: 'Kontak', path: '/#kontak' },
    { name: 'Testimoni', path: '/#testimoni' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-emerald-600/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3"
          >
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-emerald-600' : 'bg-white'
            }`}>
              <img
                src={isScrolled ? "images/logo.png" : "images/logo.png"}
                alt="Logo"
                className="h-8 w-8 transition-all duration-300"
              />
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Apotek <span className="text-red-500">Dau Sehat</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 ${
                  isActive(item.path) ? 'scale-x-100' : ''
                } ${
                  isScrolled ? 'bg-emerald-600' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleNavigation('/shop')}
              className={`p-2 rounded-lg transition-all flex items-center ${
                isScrolled
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Shop"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <a
              href="tel:082245526622"
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                isScrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-white text-emerald-600 hover:bg-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`rounded-2xl p-4 ${
            isScrolled ? 'bg-gray-50' : 'bg-white/10 backdrop-blur-lg'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                    : 'text-white hover:bg-white/10'
                } ${index !== 0 ? 'mt-1' : ''} ${
                  isActive(item.path) ? (isScrolled ? 'bg-emerald-50 text-emerald-600' : 'bg-white/20') : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200/10">
              <a
                href="tel:082245526622"
                className={`flex items-center justify-center px-4 py-3 rounded-lg space-x-2 transition-all ${
                  isScrolled
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-white text-emerald-600 hover:bg-white/90'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Hubungi Kami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;