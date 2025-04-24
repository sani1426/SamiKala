export interface ProductsTypeProps {
    _id:string;
    name: string;
    description: string;
    price: number;
    discountPrice: number;


    brand: string;
    size: string[];
    colors: string[];

    material: string;

    images: {
      url: string;
      altText: string;

    }[];

  }
  
 export interface ProductType {
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    countInStock: number;
    sku?: string;
    category: string;
    brand: string;
    sizes: string[];
    colors: string[];
    collection: string;
    material?: string;
    gender?: 'Men' | 'Women' | 'Unisex';
    images: {
      url: string;
      altText?: string;
    }[];
    isFeatured?: boolean;
    isPublished?: boolean;
    rating?: number;
    numReviews?: number;
    tags?: string[];
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    dimensions?: {
      length: number;
      width: number;
      height: number;
    };
    weight?: number;
  }
  
 