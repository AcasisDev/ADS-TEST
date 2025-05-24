import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserRole = 'owner' | 'partner' | 'staff';

interface User {
  id: number;
  username: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Simulated user database
const users = [
  { id: 1, username: 'owner', password: 'owner123', role: 'owner' as UserRole },
  { id: 2, username: 'partner', password: 'partner123', role: 'partner' as UserRole },
  { id: 3, username: 'staff', password: 'staff123', role: 'staff' as UserRole },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (username: string, password: string) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          const { password: _, ...userWithoutPassword } = user;
          set({ user: userWithoutPassword, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);