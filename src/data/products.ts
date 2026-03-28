import catVegetables from "@/assets/cat-vegetables.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catSpices from "@/assets/cat-spices.jpg";
import catRice from "@/assets/cat-rice.jpg";
import catOilseeds from "@/assets/cat-oilseeds.jpg";
import catGrains from "@/assets/cat-grains.jpg";
import catOils from "@/assets/cat-oils.jpg";

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  products: ProductItem[];
}

export interface ProductItem {
  name: string;
  slug: string;
  origin?: string;
  moisture?: string;
  packaging?: string;
  quality?: string;
  exportCountries?: string[];
  certifications?: string[];
  specifications?: Record<string, string>;
}

export const categories: ProductCategory[] = [
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    icon: "Carrot",
    image: catVegetables,
    description: "Premium quality fresh vegetables sourced from India's finest farms, meeting international quality standards.",
    products: [
      { name: "Fresh Onions", slug: "fresh-onions", origin: "Maharashtra, India", moisture: "Max 5%", packaging: "Mesh Bags 5/10/25 Kg", quality: "Grade A Export", exportCountries: ["UAE", "Saudi Arabia", "Malaysia", "Singapore", "UK"], certifications: ["APEDA", "FSSAI", "Phytosanitary"], specifications: { Color: "Red / White", Size: "40-60mm / 60-80mm", "Shelf Life": "30-45 days" } },
      { name: "Tomatoes", slug: "tomatoes", origin: "Karnataka, India", moisture: "Max 6%", packaging: "Corrugated Boxes 5/10 Kg", quality: "Grade A", exportCountries: ["UAE", "Qatar", "Oman"], certifications: ["APEDA", "FSSAI"] },
      { name: "Garlic", slug: "garlic", origin: "Madhya Pradesh, India", moisture: "Max 5%", packaging: "Mesh Bags 10/20 Kg", quality: "Premium Export", exportCountries: ["UAE", "UK", "USA"], certifications: ["APEDA", "FSSAI", "ISO 22000"] },
      { name: "Green Chilli", slug: "green-chilli", origin: "Andhra Pradesh, India", packaging: "Corrugated Boxes 5 Kg", quality: "Grade A" },
      { name: "Potatoes", slug: "potatoes", origin: "Uttar Pradesh, India", packaging: "Jute Bags 25/50 Kg", quality: "Export Quality" },
      { name: "Drumstick", slug: "drumstick", origin: "Tamil Nadu, India", packaging: "Corrugated Boxes 5 Kg", quality: "Fresh Export" },
      { name: "Bitter Gourd", slug: "bitter-gourd", origin: "Gujarat, India", packaging: "Boxes 5 Kg", quality: "Grade A" },
      { name: "Okra (Lady Finger)", slug: "okra", origin: "Maharashtra, India", packaging: "Boxes 5 Kg", quality: "Export Quality" },
    ],
  },
  {
    id: "premium-fruits",
    name: "Premium Fruits",
    icon: "Apple",
    image: catFruits,
    description: "Handpicked premium fruits from tropical and subtropical regions of India.",
    products: [
      { name: "Alphonso Mangoes", slug: "alphonso-mangoes", origin: "Ratnagiri, India", quality: "Premium Export", exportCountries: ["USA", "UK", "UAE", "Japan"], certifications: ["APEDA", "GI Tag"] },
      { name: "Pomegranates", slug: "pomegranates", origin: "Maharashtra, India", quality: "Grade A Export" },
      { name: "Bananas", slug: "bananas", origin: "Tamil Nadu, India", quality: "Export Quality" },
      { name: "Grapes", slug: "grapes", origin: "Nashik, India", quality: "Premium Export", certifications: ["GlobalGAP"] },
      { name: "Guava", slug: "guava", origin: "Uttar Pradesh, India", quality: "Grade A" },
      { name: "Papaya", slug: "papaya", origin: "Gujarat, India", quality: "Export Quality" },
    ],
  },
  {
    id: "premium-spices",
    name: "Premium Spices",
    icon: "Flame",
    image: catSpices,
    description: "Aromatic Indian spices sourced directly from spice plantations, known worldwide for superior quality.",
    products: [
      { name: "Turmeric Powder", slug: "turmeric-powder", origin: "Erode, Tamil Nadu", moisture: "Max 10%", quality: "High Curcumin", exportCountries: ["USA", "UK", "Germany", "Japan"], certifications: ["FSSAI", "Spice Board", "ISO"] },
      { name: "Red Chilli Powder", slug: "red-chilli-powder", origin: "Guntur, Andhra Pradesh", quality: "Export Grade" },
      { name: "Cumin Seeds", slug: "cumin-seeds", origin: "Gujarat, India", quality: "Singapore/Europe Quality" },
      { name: "Black Pepper", slug: "black-pepper", origin: "Kerala, India", quality: "ASTA Grade" },
      { name: "Cardamom", slug: "cardamom", origin: "Kerala, India", quality: "Bold Green" },
      { name: "Coriander Seeds", slug: "coriander-seeds", origin: "Rajasthan, India", quality: "Eagle Quality" },
      { name: "Fenugreek Seeds", slug: "fenugreek-seeds", origin: "Rajasthan, India", quality: "Sortex Clean" },
      { name: "Cinnamon Sticks", slug: "cinnamon-sticks", origin: "Kerala, India", quality: "Premium Grade" },
    ],
  },
  {
    id: "basmati-rice",
    name: "Basmati & Non-Basmati Rice",
    icon: "Wheat",
    image: catRice,
    description: "Finest Basmati and Non-Basmati rice varieties from the foothills of the Himalayas.",
    products: [
      { name: "1121 Basmati Rice", slug: "1121-basmati", origin: "Punjab, India", moisture: "Max 12.5%", quality: "Extra Long Grain", exportCountries: ["UAE", "Saudi Arabia", "Iraq", "Iran", "Yemen"], certifications: ["APEDA", "BIS", "FSSAI"], specifications: { Length: "8.30mm+", "Broken %": "Max 2%", "Average Grain Length": "8.35mm" } },
      { name: "1509 Basmati Rice", slug: "1509-basmati", origin: "Haryana, India", quality: "Long Grain" },
      { name: "Pusa Basmati Rice", slug: "pusa-basmati", origin: "Punjab, India", quality: "Aromatic Long Grain" },
      { name: "Sella Basmati Rice", slug: "sella-basmati", origin: "Punjab, India", quality: "Golden Parboiled" },
      { name: "IR-64 Non-Basmati", slug: "ir64-rice", origin: "Andhra Pradesh, India", quality: "Medium Grain" },
      { name: "Sona Masoori Rice", slug: "sona-masoori", origin: "Karnataka, India", quality: "Premium Short Grain" },
    ],
  },
  {
    id: "oil-seeds",
    name: "Oil Seeds",
    icon: "CircleDot",
    image: catOilseeds,
    description: "High-quality oil seeds meeting international food safety and quality standards.",
    products: [
      { name: "Sesame Seeds (White)", slug: "white-sesame", origin: "Gujarat, India", quality: "99.95% Purity", exportCountries: ["Japan", "Korea", "China", "USA"], certifications: ["FSSAI", "ISO 22000"] },
      { name: "Sesame Seeds (Black)", slug: "black-sesame", origin: "Rajasthan, India", quality: "99.90% Purity" },
      { name: "Groundnut Kernels", slug: "groundnut-kernels", origin: "Gujarat, India", quality: "Bold / Java" },
      { name: "Mustard Seeds", slug: "mustard-seeds", origin: "Rajasthan, India", quality: "Sortex Clean" },
      { name: "Niger Seeds", slug: "niger-seeds", origin: "Ethiopia", quality: "Export Grade" },
      { name: "Sunflower Seeds", slug: "sunflower-seeds", origin: "Karnataka, India", quality: "Confectionery Grade" },
    ],
  },
  {
    id: "grains",
    name: "Grains & Pulses",
    icon: "Grip",
    image: catGrains,
    description: "Nutrient-rich grains and pulses from India's agricultural heartland.",
    products: [
      { name: "Wheat", slug: "wheat", origin: "Madhya Pradesh, India", quality: "Milling Quality" },
      { name: "Chickpeas (Kabuli)", slug: "kabuli-chickpeas", origin: "Rajasthan, India", quality: "9mm / 10mm / 12mm" },
      { name: "Green Mung Beans", slug: "green-mung", origin: "Rajasthan, India", quality: "Machine Clean" },
      { name: "Red Lentils (Masoor)", slug: "red-lentils", origin: "Madhya Pradesh, India", quality: "Football / Split" },
      { name: "Yellow Lentils (Toor)", slug: "toor-dal", origin: "Maharashtra, India", quality: "Polished / Oily" },
      { name: "Millet (Bajra)", slug: "bajra-millet", origin: "Rajasthan, India", quality: "Sortex Clean" },
    ],
  },
  {
    id: "oils",
    name: "Edible Oils",
    icon: "Droplets",
    image: catOils,
    description: "Pure and refined edible oils for culinary and industrial applications.",
    products: [
      { name: "Groundnut Oil", slug: "groundnut-oil", origin: "Gujarat, India", quality: "Cold Pressed / Refined" },
      { name: "Sesame Oil", slug: "sesame-oil", origin: "Tamil Nadu, India", quality: "Cold Pressed" },
      { name: "Sunflower Oil", slug: "sunflower-oil", origin: "Karnataka, India", quality: "Refined" },
      { name: "Mustard Oil", slug: "mustard-oil", origin: "Rajasthan, India", quality: "Kachi Ghani" },
      { name: "Coconut Oil", slug: "coconut-oil", origin: "Kerala, India", quality: "Virgin / Refined" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (categoryId: string, slug: string) => {
  const cat = getCategory(categoryId);
  return cat?.products.find((p) => p.slug === slug);
};
