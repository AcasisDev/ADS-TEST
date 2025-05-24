/*
  # Add Initial Users

  1. Changes
    - Insert initial users into users table
    - Add owner, staff, and partner accounts
*/

-- Insert initial users
INSERT INTO users (id, username, email, role)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    'owner',
    'owner@apotekdausehat.com',
    'owner'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    'staff1',
    'staff1@apotekdausehat.com',
    'staff'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'staff2',
    'staff2@apotekdausehat.com',
    'staff'
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    'partner1',
    'partner1@apotekdausehat.com',
    'partner'
  );