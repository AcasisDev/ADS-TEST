/*
  # Add Sample Products

  1. Changes
    - Insert initial product data into products table
    - Add common medications and health products
    - Include varied categories and prices
*/

-- Insert sample products
INSERT INTO products (name, price, description, image, category, requires_prescription, stock)
VALUES
  (
    'Paracetamol 500mg',
    10000,
    'Obat untuk menurunkan demam dan meredakan nyeri ringan hingga sedang',
    'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg',
    'Obat Bebas',
    false,
    100
  ),
  (
    'Vitamin C 500mg',
    25000,
    'Suplemen untuk meningkatkan daya tahan tubuh',
    'https://images.pexels.com/photos/3850810/pexels-photo-3850810.jpeg',
    'Vitamin & Suplemen',
    false,
    75
  ),
  (
    'Amoxicillin 500mg',
    35000,
    'Antibiotik untuk mengatasi infeksi bakteri',
    'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg',
    'Obat Resep',
    true,
    50
  ),
  (
    'Tensimeter Digital',
    250000,
    'Alat ukur tekanan darah digital dengan akurasi tinggi',
    'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    'Alat Kesehatan',
    false,
    20
  ),
  (
    'Masker N95',
    15000,
    'Masker medis dengan perlindungan optimal',
    'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
    'Alat Kesehatan',
    false,
    200
  ),
  (
    'Multivitamin',
    45000,
    'Suplemen lengkap untuk kesehatan harian',
    'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg',
    'Vitamin & Suplemen',
    false,
    60
  ),
  (
    'Hand Sanitizer 100ml',
    20000,
    'Pembersih tangan antiseptik',
    'https://images.pexels.com/photos/3987152/pexels-photo-3987152.jpeg',
    'Perawatan Pribadi',
    false,
    150
  ),
  (
    'Omeprazole 20mg',
    30000,
    'Obat untuk mengatasi asam lambung',
    'https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg',
    'Obat Resep',
    true,
    40
  ),
  (
    'Termometer Digital',
    75000,
    'Pengukur suhu tubuh digital dengan akurasi tinggi',
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
    'Alat Kesehatan',
    false,
    30
  ),
  (
    'Plester Luka',
    12000,
    'Plester untuk menutup luka ringan',
    'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg',
    'Perawatan Pribadi',
    false,
    100
  );