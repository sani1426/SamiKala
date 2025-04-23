// Interface for the shirt data
export interface ProductsTypeProps {
    _id:string;
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    countInStock: number;
    sku: string;
    category: string;
    brand: string;
    sizes: string[];
    colors: string[];
    collections: string;
    material: string;
    gender: string;
    images: {
      url: string;
      altText: string;
      _id: string;
    }[];
    isFeatured: boolean;
    isPublished: boolean;
    rating: number;
    numReviews: number;
    tags: string[];
    user:string;
    __v: number;
    createdAt: {
      $date: string;
    };
    updatedAt: {
      $date: string;
    };
  }
  
  // Example object matching the Shirt interface
 