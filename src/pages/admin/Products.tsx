import { useState, useEffect } from 'react';
import { Menu, X, Edit, Trash2, Search, Plus, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';
import { Database } from '../../types/supabase';

type Product = Database['public']['Tables']['products']['Row'];

interface ProductModalProps {
  isEdit?: boolean;
  formData: FormDataState;
  setFormData: React.Dispatch<React.SetStateAction<FormDataState>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleClose: () => void;
  loading: boolean;
  categories: string[];
}

type FormDataState = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  requires_prescription: boolean;
  stock: string;
};

const ProductModal: React.FC<ProductModalProps> = ({
  isEdit = false,
  formData,
  setFormData,
  handleSubmit,
  handleClose,
  loading,
  categories
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg w-full max-w-2xl">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">
            {isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Produk
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500"
              placeholder="Masukkan nama produk"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harga (Rp)
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Masukkan harga"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stok
              </label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Masukkan jumlah stok"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500"
              rows={4}
              placeholder="Masukkan deskripsi produk"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Gambar
            </label>
            <input
              type="url"
              required
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500"
              placeholder="Masukkan URL gambar"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="">Pilih Kategori</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="requires_prescription"
              checked={formData.requires_prescription}
              onChange={(e) => setFormData({ ...formData, requires_prescription: e.target.checked })}
              className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="requires_prescription" className="text-base text-gray-700 cursor-pointer">
              Memerlukan Resep
            </label>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleClose}
            className="px-6 py-3 border rounded-lg hover:bg-gray-50 text-base font-medium"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 text-base font-medium flex items-center"
          >
            {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {isEdit ? 'Simpan Perubahan' : 'Tambah Produk'}
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    requires_prescription: false,
    stock: ''
  });

  const categories = [
    'Obat Resep',
    'Obat Bebas',
    'Vitamin & Suplemen',
    'Alat Kesehatan',
    'Perawatan Pribadi'
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Gagal memuat data produk');
    } finally {
      setLoading(false);
    }
  };

  const resetFormAndModals = () => {
    setFormData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: '',
      requires_prescription: false,
      stock: ''
    });
    setShowAddModal(false);
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Basic validation
      if (!formData.name || !formData.price || !formData.stock || !formData.category || !formData.description || !formData.image) {
        toast.error('Semua field wajib diisi!');
        setLoading(false);
        return;
      }

      const productData = {
        name: formData.name.trim(),
        price: parseInt(formData.price),
        description: formData.description.trim(),
        image: formData.image.trim(),
        category: formData.category,
        requires_prescription: formData.requires_prescription,
        stock: parseInt(formData.stock)
      };

      let result;
      
      if (selectedProduct) {
        // Update existing product
        result = await supabase
          .from('products')
          .update(productData)
          .eq('id', selectedProduct.id)
          .select();
      } else {
        // Create new product
        result = await supabase
          .from('products')
          .insert([productData])
          .select();
      }

      if (result.error) throw result.error;

      toast.success(selectedProduct ? 'Produk berhasil diperbarui' : 'Produk berhasil ditambahkan');
      resetFormAndModals();
      await fetchProducts();
    } catch (error: any) {
      console.error('Error saving product:', error);
      toast.error(error.message || 'Gagal menyimpan produk');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    resetFormAndModals();
    setShowAddModal(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description || '',
      image: product.image || '',
      category: product.category,
      requires_prescription: product.requires_prescription,
      stock: product.stock.toString()
    });
    setShowEditModal(true);
    setShowAddModal(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Produk berhasil dihapus');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Gagal menghapus produk');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    resetFormAndModals();
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kelola Produk</h2>
          <p className="text-gray-600">Tambah, edit, dan hapus produk</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg flex items-center hover:bg-emerald-700 text-base font-medium"
        >
          <Plus className="w-5 h-5 mr-2" />
          Tambah Produk
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 w-full border rounded-lg focus:ring-2 focus:ring-emerald-500 text-base"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50">
            <div className="grid grid-cols-6 gap-4 px-6 py-4">
              <div className="col-span-2 text-left text-sm font-medium text-gray-500 uppercase">
                Produk
              </div>
              <div className="text-left text-sm font-medium text-gray-500 uppercase">
                Kategori
              </div>
              <div className="text-left text-sm font-medium text-gray-500 uppercase">
                Harga
              </div>
              <div className="text-left text-sm font-medium text-gray-500 uppercase">
                Stok
              </div>
              <div className="text-left text-sm font-medium text-gray-500 uppercase">
                Aksi
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {loading ? (
              <div className="px-6 py-4 text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-emerald-600" />
                <p className="mt-2 text-sm text-gray-500">Memuat data produk...</p>
              </div>
            ) : !loading && filteredProducts.length === 0 ? (
              <div className="px-6 py-4 text-center text-gray-500">
                Tidak ada produk ditemukan {searchQuery && 'dengan kata kunci "' + searchQuery + '"'}
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div key={product.id} className="grid grid-cols-6 gap-4 px-6 py-4 items-center hover:bg-gray-50">
                  <div className="col-span-2 flex items-center">
                    <img
                      src={product.image || "https://via.placeholder.com/150?text=No+Image"}
                      alt={product.name}
                      className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image")}
                    />
                    <div className="ml-4 min-w-0">
                      <div className="font-medium text-gray-900 truncate">{product.name}</div>
                      <div className="text-sm text-gray-500 line-clamp-2">
                        {product.description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                      product.requires_prescription ? 'bg-orange-100 text-orange-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {product.category}
                      {product.requires_prescription && <span title="Memerlukan resep">*</span>}
                    </span>
                  </div>
                  <div className="text-gray-900 font-medium">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                  <div className="text-gray-900">
                    {product.stock}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Hapus"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && (
        <ProductModal
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          handleClose={closeModal}
          loading={loading}
          categories={categories}
        />
      )}
      {showEditModal && selectedProduct && (
        <ProductModal
          isEdit
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          handleClose={closeModal}
          loading={loading}
          categories={categories}
        />
      )}
    </div>
  );
};

export default Products;