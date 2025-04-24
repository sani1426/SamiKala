// Interface for the shirt data
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
  
  // Example object matching the Shirt interface
 