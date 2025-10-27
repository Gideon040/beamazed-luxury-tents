// types/database.types.ts
export interface Database {
  public: {
    Tables: {
      product_categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          sort_order: number
          hero_image_url: string | null
          category_image_url: string | null
          created_at: string
          updated_at: string
        }
      }
      product_series: {
        Row: {
          id: string
          category_id: string
          name: string
          slug: string
          description: string | null
          sort_order: number
          created_at: string
          updated_at: string
        }
      }
      products: {
        Row: {
          id: string
          category_id: string
          series_id: string | null
          name: string
          slug: string
          sku: string | null
          tagline: string | null
          description: string | null
          indoor_space: number | null
          canopy_space: number | null
          total_space: number | null
          dimensions: string | null
          capacity_seated: number | null
          capacity_standing: number | null
          price: number | null
          installation_price: number | null
          installation_days: number | null
          installation_description: string | null
          is_active: boolean
          is_featured: boolean
          sort_order: number
          meta_title: string | null
          meta_description: string | null
          created_at: string
          updated_at: string
        }
      }
      product_variants: {
        Row: {
          id: string
          product_id: string
          name: string
          sku: string | null
          indoor_space: number | null
          canopy_space: number | null
          total_space: number | null
          dimensions: string | null
          capacity_seated: number | null
          capacity_standing: number | null
          price: number | null
          installation_price: number | null
          installation_days: number | null
          sort_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
      }
      product_images: {
        Row: {
          id: string
          product_id: string
          url: string
          alt_text: string | null
          title: string | null
          type: string
          sort_order: number
          created_at: string
        }
      }
      product_specifications: {
        Row: {
          id: string
          product_id: string
          category: string
          name: string
          value: string | null
          is_standard: boolean
          is_optional: boolean
          sort_order: number
          created_at: string
        }
      }
      product_features: {
        Row: {
          id: string
          product_id: string
          title: string
          description: string | null
          icon: string | null
          sort_order: number
          created_at: string
        }
      }
      product_documents: {
        Row: {
          id: string
          product_id: string
          name: string
          url: string
          type: string
          file_size: number | null
          created_at: string
        }
      }
    }
  }
}

// Helper types for easier use
export type Category = Database['public']['Tables']['product_categories']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type ProductSeries = Database['public']['Tables']['product_series']['Row']
export type ProductVariant = Database['public']['Tables']['product_variants']['Row']
export type ProductImage = Database['public']['Tables']['product_images']['Row']
export type ProductSpecification = Database['public']['Tables']['product_specifications']['Row']
export type ProductFeature = Database['public']['Tables']['product_features']['Row']
export type ProductDocument = Database['public']['Tables']['product_documents']['Row']

// Extended types with relations
export interface ProductWithRelations extends Product {
  category?: Category
  series?: ProductSeries
  images?: ProductImage[]
  specifications?: ProductSpecification[]
  features?: ProductFeature[]
  variants?: ProductVariant[]
  documents?: ProductDocument[]
}

export interface CategoryWithProducts extends Category {
  products?: ProductWithRelations[]
}