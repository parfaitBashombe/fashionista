export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  featured: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export const collections: Collection[] = [
  {
    id: "summer",
    name: "Summer Collection",
    description: "Breezy, bold, and vibrant fashion wear for sunny days.",
    image: "https://images.unsplash.com/photo-1520975922071-a28e1a6f0a08?w=800",
    products: [
      {
        id: "classic-dress",
        name: "Classic Dress",
        price: 129,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        featured: true,
      },
      {
        id: "beach-hat",
        name: "Beach Hat",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: false,
      },
      {
        id: "summer-sunglasses",
        name: "Summer Sunglasses",
        price: 89,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: true,
      },
      {
        id: "linen-shirt",
        name: "Linen Shirt",
        price: 69,
        image:
          "https://images.unsplash.com/photo-1520975918311-7ce3177df4d5?w=800",
        featured: false,
      },
    ],
  },
  {
    id: "winter",
    name: "Winter Collection",
    description: "Warm, cozy, and stylish essentials for the season.",
    image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=800",
    products: [
      {
        id: "modern-jacket",
        name: "Modern Jacket",
        price: 199,
        image:
          "https://images.unsplash.com/photo-1520975833759-9e0f9e4b998f?w=800",
        featured: true,
      },
      {
        id: "wool-scarf",
        name: "Wool Scarf",
        price: 39,
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
        featured: false,
      },
      {
        id: "leather-gloves",
        name: "Leather Gloves",
        price: 79,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: true,
      },
      {
        id: "beanie",
        name: "Cozy Beanie",
        price: 29,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: false,
      },
    ],
  },
  {
    id: "formal",
    name: "Formal Collection",
    description: "Elegant designs for a bold professional look.",
    image: "https://images.unsplash.com/photo-1520975918311-7ce3177df4d5?w=800",
    products: [
      {
        id: "business-suit",
        name: "Business Suit",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1520975918311-7ce3177df4d5?w=800",
        featured: true,
      },
      {
        id: "formal-shoes",
        name: "Formal Shoes",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        featured: true,
      },
      {
        id: "tie-set",
        name: "Tie Set",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: false,
      },
      {
        id: "cufflinks",
        name: "Cufflinks",
        price: 59,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: false,
      },
    ],
  },
  {
    id: "streetwear",
    name: "Streetwear Collection",
    description: "Casual, trendy, and urban-inspired outfits.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
    products: [
      {
        id: "hoodie",
        name: "Comfy Hoodie",
        price: 89,
        image:
          "https://images.unsplash.com/photo-1520975833759-9e0f9e4b998f?w=800",
        featured: true,
      },
      {
        id: "sneakers",
        name: "Street Sneakers",
        price: 129,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        featured: true,
      },
      {
        id: "graphic-tee",
        name: "Graphic T-Shirt",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800",
        featured: false,
      },
      {
        id: "baseball-cap",
        name: "Baseball Cap",
        price: 39,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        featured: false,
      },
    ],
  },
];
