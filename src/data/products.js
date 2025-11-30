/**
 * Dummy product data for the ecommerce store
 * Each product has an id, name, price (in Indian Rupees), description, and image URL
 * Using inline SVG images as placeholders
 */
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 6499,
    description: "High-quality wireless headphones with noise cancellation",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%234A90E2' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🎧 Headphones%3C/text%3E%3C/svg%3E",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 15999,
    description: "Fitness tracking smart watch with heart rate monitor",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2350C878' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E⌚ Smart Watch%3C/text%3E%3C/svg%3E",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 7299,
    description: "Comfortable running shoes with excellent cushioning",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23FF6B6B' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E👟 Running Shoes%3C/text%3E%3C/svg%3E",
    category: "Sports"
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 10499,
    description: "Programmable coffee maker with thermal carafe",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23FFA500' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E☕ Coffee Maker%3C/text%3E%3C/svg%3E",
    category: "Home"
  },
  {
    id: 5,
    name: "Backpack",
    price: 3999,
    description: "Durable laptop backpack with multiple compartments",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%239B59B6' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🎒 Backpack%3C/text%3E%3C/svg%3E",
    category: "Accessories"
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 2499,
    description: "Non-slip yoga mat with carrying strap",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%231ABC9C' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🧘 Yoga Mat%3C/text%3E%3C/svg%3E",
    category: "Sports"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 4899,
    description: "Portable waterproof Bluetooth speaker",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23E74C3C' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🔊 Speaker%3C/text%3E%3C/svg%3E",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 3299,
    description: "LED desk lamp with adjustable brightness",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23F39C12' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E💡 Desk Lamp%3C/text%3E%3C/svg%3E",
    category: "Home"
  },
  {
    id: 9,
    name: "Water Bottle",
    price: 1999,
    description: "Insulated stainless steel water bottle",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%233498DB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E💧 Water Bottle%3C/text%3E%3C/svg%3E",
    category: "Sports"
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 2799,
    description: "Ergonomic wireless mouse with precision tracking",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%232C3E50' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🖱️ Mouse%3C/text%3E%3C/svg%3E",
    category: "Electronics"
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 9599,
    description: "UV protection polarized sunglasses",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23E67E22' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🕶️ Sunglasses%3C/text%3E%3C/svg%3E",
    category: "Accessories"
  },
  {
    id: 12,
    name: "Plant Pot",
    price: 1599,
    description: "Ceramic plant pot with drainage hole",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2327AE60' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='white' text-anchor='middle' dy='0.3em' font-family='Arial'%3E🪴 Plant Pot%3C/text%3E%3C/svg%3E",
    category: "Home"
  }
];

