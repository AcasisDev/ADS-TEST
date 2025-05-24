-- Drop all existing policies
DROP POLICY IF EXISTS "Allow staff and owner to delete products" ON products;
DROP POLICY IF EXISTS "Allow staff and owner to insert products" ON products;
DROP POLICY IF EXISTS "Allow staff and owner to update products" ON products;
DROP POLICY IF EXISTS "Allow public read access to products" ON products;

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Allow public read access to products"
ON products
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow staff and owner to insert products"
ON products
FOR INSERT
TO authenticated
WITH CHECK (
  auth.role() IN ('authenticated', 'service_role') AND
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role IN ('staff', 'owner')
  )
);

CREATE POLICY "Allow staff and owner to update products"
ON products
FOR UPDATE
TO authenticated
USING (
  auth.role() IN ('authenticated', 'service_role') AND
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role IN ('staff', 'owner')
  )
);

CREATE POLICY "Allow staff and owner to delete products"
ON products
FOR DELETE
TO authenticated
USING (
  auth.role() IN ('authenticated', 'service_role') AND
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role IN ('staff', 'owner')
  )
);