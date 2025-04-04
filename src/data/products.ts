import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Pickles",
    description: "Traditional handcrafted Indian pickles",
    imageUrl: "/img/diced_mango_prickle.jpg"
  },
  {
    id: "cat2",
    name: "Ghee",
    description: "Pure organic traditional ghee",
    imageUrl: "/img/cow_ghee.png"},
  // {
  //   id: "cat3",
  //   name: "Jams",
  //   description: "Homemade preserves and fruit jams",
  //   imageUrl: "/img/litchi_honey.jpg"
  // },
  {
    id: "cat4",
    name: "Honey",
    description: "Pure organic natural honey varieties",
    imageUrl: "/img/himalyan_multi_floral_honey.jpg"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Diced Mango Pickle",
    description: "Traditional handcrafted mango pickle made with organic raw mangoes, premium spices, and cold-pressed mustard oil. A perfect blend of tangy and spicy flavors.",
    price: 2.99,
    imageUrl: "/img/diced_mango_prickle.jpg",
    category: "cat1",
    rating: 4.8,
    stock: 25
  },
  {
    id: "2",
    name: "Spicy Lemon Pickle",
    description: "Tangy and zesty lemon pickle prepared with organic lemons and traditional spices. Perfect accompaniment for Indian meals and snacks.",
    price: 2.89,
    imageUrl: "/img/spicy_lemon_pickle.jpg",
    category: "cat1",
    rating: 4.7,
    stock: 18
  },
  {
    id: "3",
    name: "Chilly Pickle",
    description: "Spicy and flavorful chilly pickle made with fresh green chilies, aromatic spices, and pure mustard oil. Adds a fiery kick to any meal.",
    price: 1.99,
    imageUrl: "/img/green_chilli_pickle.jpg",
    category: "cat1",
    rating: 4.5,
    stock: 22
  },
  {
    id: "4",
    name: "Cow Ghee",
    description: "Pure cow ghee made from the milk of grass-fed cows. Rich in nutrients and flavor, perfect for cooking and enhancing the taste of your dishes.",
    
    price: 9.99,
    imageUrl: "img/cow_ghee.png",
    category: "cat2",
    rating: 4.9,
    stock: 15
  },
  // {
  //   id: "5",
  //   name: "Buffalo Ghee",
  //   description: "Premium buffalo ghee with rich texture and authentic flavor. Made through slow cooking process to retain all natural nutrients and aroma.",
  //   price: 6.99,
  //   imageUrl: "https://images.unsplash.com/photo-1631633144046-d37f18d36618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //   category: "cat2",
  //   rating: 4.7,
  //   stock: 12
  // },
  // {
  //   id: "6",
  //   name: "Mixed Fruit Jam",
  //   description: "Delicious homemade jam with a blend of seasonal fruits. No artificial preservatives or colors, just pure fruit goodness in every spoon.",
  //   price: 3.99,
  //   imageUrl: "https://images.unsplash.com/photo-1597314040916-84b439aebac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //   category: "cat3",
  //   rating: 4.6,
  //   stock: 20
  // },
  // {
  //   id: "7",
  //   name: "Strawberry Jam",
  //   description: "Sweet and luscious strawberry jam made with handpicked organic strawberries. Perfect for breakfast spreads and dessert toppings.",
  //   price: 3.99,
  //   imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //   category: "cat3",
  //   rating: 4.8,
  //   stock: 16
  // },
  // {
  //   id: "8",
  //   name: "Orange Marmalade",
  //   description: "Tangy and sweet orange marmalade with bits of orange zest. Handcrafted in small batches to ensure finest quality and flavor.",
  //   price: 3.99,
  //   imageUrl: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //   category: "cat3",
  //   rating: 4.7,
  //   stock: 14
  // },
  {
    id: "9",
    name: "Himalayan Multi Floral Honey",
    description: "Pure and natural honey harvested from the pristine Himalayan mountains. This multi-floral honey offers complex flavors and rich nutritional benefits from diverse wildflowers.",
    price: 11.99,
    imageUrl: "/img/himalyan_multi_floral_honey.jpg",
    category: "cat4",
    rating: 4.9,
    stock: 20
  },
  {
    id: "10",
    name: "Litchi Honey",
    description: "Exquisite monofloral honey produced from litchi blossoms. Features a delicate floral aroma with distinctive fruity notes and a smooth, light amber color.",
    price: 9.99,
    imageUrl: "/img/litchi_honey.jpg",
    category: "cat4",
    rating: 4.8,
    stock: 15
  },
  {
    id: "11",
    name: "Berry Honey",
    description: "Premium honey collected from bees that predominantly pollinate berry flowers. Offers a unique berry-infused sweetness with subtle tartness and a rich amber hue.",
    price: 10.99,
    imageUrl: "/img/Berry_honey.jpg",
    category: "cat4",
    rating: 4.7,
    stock: 18
  },
  {
    id: "12",
    name: "Boiled Gooseberry Pickle",
    description: "Traditional Indian pickle made with boiled gooseberries, spices, and mustard oil. A tangy and spicy condiment that pairs well with rice and roti.",
    price: 2.49,
    imageUrl: "/img/boiled_gooseberry_pickle.png",
    category: "cat1",
    rating: 4.6,
    stock: 22
    
  },
  {
    id: "13",
    name: "Aswagandha Honey",
    description: "Unique honey infused with ashwagandha, known for its adaptogenic properties. Offers a rich, earthy flavor with potential health benefits.",
    price: 8.99,
    imageUrl: "/img/ashwagandh_honey.jpg",
    category: "cat4",
    rating: 4.8,
    stock: 12
  },
  {
    id: "14",
    name: "Crushed Mango Pickle",
    description: "Sweet and tangy Indian pickle made with crushed mango, spices, and mustard oil. A delightful condiment that adds flavor to any meal.",
    price: 2.99,
    imageUrl: "/img/crushed_mango_pickle.jpg",
    category: "cat1",
    rating: 4.7,
    stock: 16
  },
  {
    id: "15",
    name: "Ginger Garlic Pickle",
    description: "Spicy and aromatic ginger garlic pickle made with fresh ginger, garlic, and traditional spices. A perfect accompaniment for Indian meals.",
    price: 2.99,
    imageUrl: "/img/ginger_garlic_pickle.jpg",
    category: "cat1",
    rating: 4.5,
    stock: 20
  },
  {
    id: "16",
    name: "Green Chilli Pickle",
    description: "Spicy and tangy green chilli pickle made with fresh green chilies, spices, and mustard oil. Adds a fiery kick to your meals.",
    price: 2.49,
    imageUrl: "/img/green_chilli_pickle.jpg",
    category: "cat1",
    rating: 4.6,
    stock: 18
  },
  {
    id: "17",
    name: "Jackfruit Pickle",
    description: "Tangy and zesty jackfruit pickle made with raw jackfruit, spices, and mustard oil. A unique and flavorful condiment for Indian meals.",
    price: 2.99,
    imageUrl: "/img/jackfruit_pickle.jpg",
    category: "cat1",
    rating: 4.7,
    stock: 22
  },
  {
    id: "18",
    name: "Red Chilli Pickle",
    description: "Spicy and tangy red chilli pickle made with dried red chilies, spices, and mustard oil. A perfect condiment for adding heat to your meals.",
    price: 2.49,
    imageUrl: "/img/red_chilli_pickle.jpg",
    category: "cat1",
    rating: 4.5,
    stock: 15},
    {
      id: "19",
      name: "Ajwain Honey",
      description: "Unique honey infused with ajwain, known for its digestive properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/ajwain_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "20",
      name: "Amla Honey",
      description: "Unique honey infused with amla, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/amla_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "21",
      name: "Babool Honey",
      description: "Unique honey infused with babool, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/babool_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "22",
      name: "Black Forest Honey",
      description: "Unique honey infused with black forest, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/black_forest_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12

    },
    {
      id: "23",
      name: "Brankut Honey",
      description: "Unique honey infused with brankut, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/brankut_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    { 
      id: "24",
      name: "Chococlate Honey",
      description: "Unique honey infused with chococlate, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/chocolate_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "25",
      name: "Cinnamon Honey",
      description: "Unique honey infused with cinnamon, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/cinnamon_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "26",
      name: "Clove Honey",
      description: "Unique honey infused with clove, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/clover_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12     

    },
    {
      id: "27",
      name: "Coffee Honey",
      description: "Unique honey infused with coffee, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/coffee_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "28",
      name: "Coriander Honey",
      description: "Unique honey infused with coriander, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/coriander_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "29",
      name: "Eucalyptus Honey",
      description: "Unique honey infused with eucalyptus, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/eucalyptus_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "30",
      name: "Ginger Honey",
      description: "Unique honey infused with ginger, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/ginger_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "31",
      name: "Karanj Honey",
      description: "Unique honey infused with karanj, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/karanj_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "32",
      name: "Lemon Honey",
      description: "Unique honey infused with lemon, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/lemon_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "33",
      name: "Keekar Honey",
      description: "Unique honey infused with keekar, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/keekar_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
      
    },
    {
      id: "34",
      name: "Lichi Honey",
      description: "Unique honey infused with lichi, known for its antioxidant properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/lichi_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    },
    {
      id: "35",
      name: "Mangrove Honey",
      description: "Unique honey infused with mangrove, known for its anti-inflammatory properties. Offers a rich, earthy flavor with potential health benefits.",
      price: 8.99,
      imageUrl: "/img/mangrove_honey.png",
      category: "cat4",
      rating: 4.8,
      stock: 12
    }
    
      
    
  
  
  
  
    
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};
