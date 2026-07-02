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
          slug: string
          title_ar: string
          title_en: string
          description_ar: string
          description_en: string
          hero_badge_ar: string
          hero_badge_en: string
          accent_color: string
          hero_image_url: string | null
          overview_image_url: string | null
          features_ar: Json
          features_en: Json
          stats_ar: Json
          stats_en: Json
          cta_product_url: string | null
          is_published: boolean
          sort_order: number
          seo_title_ar: string | null
          seo_title_en: string | null
          seo_description_ar: string | null
          seo_description_en: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }
      articles: {
        Row: {
          id: string
          slug: string
          title_ar: string
          title_en: string
          excerpt_ar: string
          excerpt_en: string
          body_ar: string
          body_en: string
          hero_image_url: string | null
          category_ar: string
          category_en: string
          read_time_minutes: number
          published_at: string | null
          is_published: boolean
          related_product_slug: string | null
          seo_title_ar: string | null
          seo_title_en: string | null
          seo_description_ar: string | null
          seo_description_en: string | null
          og_image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['articles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['articles']['Insert']>
      }
      projects: {
        Row: {
          id: string
          title_ar: string
          title_en: string
          description_ar: string
          description_en: string
          client_name: string
          badge_ar: string
          badge_en: string
          badge_color: string
          images: string[]
          is_published: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['projects']['Insert']>
      }
      testimonials: {
        Row: {
          id: string
          name_ar: string
          name_en: string
          role_ar: string
          role_en: string
          content_ar: string
          content_en: string
          initials: string
          is_published: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['testimonials']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['testimonials']['Insert']>
      }
      leads: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string | null
          brand_name: string | null
          num_locations: string | null
          country: string | null
          message: string | null
          wants_demo: boolean
          status: 'new' | 'read' | 'responded'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['leads']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['leads']['Insert']>
      }
      job_listings: {
        Row: {
          id: string
          title_ar: string
          title_en: string
          department_ar: string
          department_en: string
          location_ar: string
          location_en: string
          type_ar: string
          type_en: string
          description_ar: string
          description_en: string
          requirements_ar: string[]
          requirements_en: string[]
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['job_listings']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['job_listings']['Insert']>
      }
      job_applications: {
        Row: {
          id: string
          job_listing_id: string
          applicant_name: string
          email: string
          phone: string | null
          cover_letter: string | null
          resume_url: string | null
          status: 'new' | 'reviewed' | 'shortlisted' | 'rejected'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['job_applications']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['job_applications']['Insert']>
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: Json
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['site_settings']['Row'], 'id' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['site_settings']['Insert']>
      }
      activity_log: {
        Row: {
          id: string
          user_id: string
          user_email: string
          action: string
          entity_type: string
          entity_id: string | null
          details: Json | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['activity_log']['Row'], 'id' | 'created_at'>
        Update: never
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
