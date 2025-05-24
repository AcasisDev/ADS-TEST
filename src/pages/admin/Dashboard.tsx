import {
  Users as UsersIcon, Package, ClipboardList, Settings as SettingsIcon, LogOut,
  TrendingUp, ShoppingBag, AlertCircle
} from 'lucide-react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

// Import admin pages
import Products from './Products';
import Orders from './Orders';
import Users from './Users';
import Settings from './Settings';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const stats = [
    { 
      title: 'Total Penjualan',
      value: 'Rp 15.000.000',
      change: '+12.5%',
      icon: TrendingUp
    },
    {
      title: 'Produk Terjual',
      value: '156',
      change: '+8.2%',
      icon: ShoppingBag
    },
    {
      title: 'Stok Menipis',
      value: '12',
      change: '-2.4%',
      icon: AlertCircle
    }
  ];

  const menu = [
    { name: 'Dashboard', icon: TrendingUp, path: '/admin/dashboard' },
    { name: 'Kelola Produk', icon: Package, path: '/admin/products' },
    { name: 'Kelola Pesanan', icon: ClipboardList, path: '/admin/orders' },
    { name: 'Kelola Pengguna', icon: UsersIcon, path: '/admin/users', ownerOnly: true },
    { name: 'Pengaturan', icon: SettingsIcon, path: '/admin/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-emerald-600 text-white">
        <div className="p-6">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
              <div className="text-emerald-600 font-bold text-xl">A</div>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold">Admin Panel</h1>
              <p className="text-sm text-emerald-100">
                {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
              </p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          {menu.map((item) => (
            (!item.ownerOnly || user?.role === 'owner') && (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-700 text-white'
                    : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          ))}
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-sm font-medium text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Keluar
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64">
        <Routes>
          <Route path="/dashboard" element={
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Selamat datang, {user?.username}!
                </h2>
                <p className="text-gray-600">
                  Berikut adalah ringkasan aktivitas toko Anda
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-600">{stat.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </p>
                      <p className={`ml-2 text-sm ${
                        stat.change.startsWith('+') 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b">
                      <div>
                        <p className="font-medium">Pesanan #1234{i}</p>
                        <p className="text-sm text-gray-600">2 produk - Rp 150.000</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                        Selesai
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;