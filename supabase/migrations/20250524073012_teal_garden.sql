-- Insert initial users if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM users WHERE email = 'owner@apotekdausehat.com') THEN
    INSERT INTO users (username, email, role)
    VALUES (
      'owner',
      'owner@apotekdausehat.com',
      'owner'
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM users WHERE email = 'staff1@apotekdausehat.com') THEN
    INSERT INTO users (username, email, role)
    VALUES (
      'staff1',
      'staff1@apotekdausehat.com',
      'staff'
    );
  END IF;
END $$;

-- Insert sample products if they don't exist
INSERT INTO products (name, price, description, image, category, requires_prescription, stock)
SELECT
  'Paracetamol 500mg',
  10000,
  'Obat untuk menurunkan demam dan meredakan nyeri ringan hingga sedang',
  'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg',
  'Obat Bebas',
  false,
  100
WHERE NOT EXISTS (
  SELECT 1 FROM products WHERE name = 'Paracetamol 500mg'
);

INSERT INTO products (name, price, description, image, category, requires_prescription, stock)
SELECT
  'Vitamin C 500mg',
  25000,
  'Suplemen untuk meningkatkan daya tahan tubuh',
  'https://images.pexels.com/photos/3850810/pexels-photo-3850810.jpeg',
  'Vitamin & Suplemen',
  false,
  75
WHERE NOT EXISTS (
  SELECT 1 FROM products WHERE name = 'Vitamin C 500mg'
);