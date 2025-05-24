export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          price: number
          description: string | null
          image: string | null
          category: string
          requires_prescription: boolean
          stock: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          price: number
          description?: string | null
          image?: string | null
          category: string
          requires_prescription?: boolean
          stock: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          description?: string | null
          image?: string | null
          category?: string
          requires_prescription?: boolean
          stock?: number
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          username: string
          email: string
          role: 'owner' | 'staff' | 'partner'
          last_login: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          username: string
          email: string
          role: 'owner' | 'staff' | 'partner'
          last_login?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          email?: string
          role?: 'owner' | 'staff' | 'partner'
          last_login?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}