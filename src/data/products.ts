import catVegetables from "@/assets/cat-vegetables.jpg";
import catFruits from "@/assets/cat-fruits.jpg";
import catSpices from "@/assets/cat-spices.jpg";
import catRice from "@/assets/cat-rice.jpg";
import catOilseeds from "@/assets/cat-oilseeds.jpg";
import catGrains from "@/assets/cat-grains.jpg";
import catOils from "@/assets/cat-oils.jpg";


import freshOnions from "@/assets/productimage/fresh-onions.png";
import tomatoes from "@/assets/productimage/tomato.png";
import garlic from "@/assets/productimage/garlic.png";
import greenChilli from "@/assets/productimage/greenchilli.png";
import potatoes from "@/assets/productimage/potato.png";
import drumstick from "@/assets/productimage/drumstick.png";
import bitterGourd from "@/assets/productimage/bitter-gourd.png";
import okra from "@/assets/productimage/okra.png";


import alphonsoMangoes from "@/assets/productimage/mangoes.png";
import pomegranates from "@/assets/productimage/pomegranates.png";
import bananas from "@/assets/productimage/banana.png";
import grapes from "@/assets/productimage/grapas.png";
import guava from "@/assets/productimage/guava.png";
import papaya from "@/assets/productimage/papaya.png";

import turmericPowder from "@/assets/productimage/turmericpowder.png";
import redChilliPowder from "@/assets/productimage/redChillipowder.png";
import cuminSeeds from "@/assets/productimage/cuminseeds.png";
import blackPepper from "@/assets/productimage/blackpepper.png";
import cardamom from "@/assets/productimage/cardamom.png";
import corianderSeeds from "@/assets/productimage/coriandersceeds.png";
import fenugreekSeeds from "@/assets/productimage/fenugreekSeeds.png";
import cinnamonSticks from "@/assets/productimage/cinnamonsticks.png";

import basmatiRice1 from "@/assets/productimage/basmatirice11.png";
import basmatiRice2 from "@/assets/productimage/basmatirice1509.png";
import basmatiRice3 from "@/assets/productimage/basmatibicepusa.png";
import basmatiRice4 from "@/assets/productimage/basmatiricesela.png";
import basmatiRice5 from "@/assets/productimage/basmatirice5.png";
import basmatiRice6 from "@/assets/productimage/basmatirice6.png";


import sesameSeedswhite from "@/assets/productimage/sesameseedswhite.png";
import sesameSeedsblack from "@/assets/productimage/sesameseedsblack.png";
import groundnutKernels from "@/assets/productimage/groundnutkernels.png";
import mustardSeeds from "@/assets/productimage/mustardseeds.png";
import nigerSeeds from "@/assets/productimage/nigerseeds.png";
import sunflowerSeeds from "@/assets/productimage/sunflower-seeds.png";


import wheat from "@/assets/productimage/wheat.png";
import chickpeas from "@/assets/productimage/chickpeas-kabuli.png";
import greenMung from "@/assets/productimage/green-mung-beans.png";
import redLentils from "@/assets/productimage/red-lentils-masoor.png";
import yellowLentils from "@/assets/productimage/yellow-lentils-toor.png";
import millet from "@/assets/productimage/millet-bajra.png";


import groundnutOil from "@/assets/productimage/groundnut-oil.png";
import sesameOil from "@/assets/productimage/sesame-oil.png";
import sunflowerOil from "@/assets/productimage/sunflower-oil.png";
import mustardOil from "@/assets/productimage/mustardoil.png";
import coconutOil from "@/assets/productimage/coconutoil.png";


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
  image?: string; 
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
        { name: "Fresh Onions", slug: "fresh-onions" , image: freshOnions, origin: "Maharashtra, India", moisture: "Max 5%", packaging: "Mesh Bags 5/10/25 Kg", quality: "Grade A Export", exportCountries: ["UAE", "Saudi Arabia", "Malaysia", "Singapore", "UK"], certifications: ["APEDA", "FSSAI", "Phytosanitary"], specifications: { Color: "Red / White", Size: "40-60mm / 60-80mm", "Shelf Life": "30-45 days" } },
      { name: "Tomatoes", slug: "tomatoes",image:tomatoes, origin: "Karnataka, India", moisture: "Max 6%", packaging: "Corrugated Boxes 5/10 Kg", quality: "Grade A", exportCountries: ["UAE", "Qatar", "Oman"], certifications: ["APEDA", "FSSAI"] },
      { name: "Garlic", slug: "garlic", image: garlic,origin: "Madhya Pradesh, India", moisture: "Max 5%", packaging: "Mesh Bags 10/20 Kg", quality: "Premium Export", exportCountries: ["UAE", "UK", "USA"], certifications: ["APEDA", "FSSAI", "ISO 22000"] },
      { name: "Green Chilli", slug: "green-chilli", image: greenChilli,origin: "Andhra Pradesh, India", packaging: "Corrugated Boxes 5 Kg", quality: "Grade A" },
      { name: "Potatoes", slug: "potatoes", image: potatoes, origin: "Uttar Pradesh, India", packaging: "Jute Bags 25/50 Kg", quality: "Export Quality" },
      { name: "Drumstick", slug: "drumstick", image: drumstick, origin: "Tamil Nadu, India", packaging: "Corrugated Boxes 5 Kg", quality: "Fresh Export" },
      { name: "Bitter Gourd", slug: "bitter-gourd", image: bitterGourd, origin: "Gujarat, India", packaging: "Boxes 5 Kg", quality: "Grade A" },
      { name: "Okra (Lady Finger)", slug: "okra", image: okra, origin: "Maharashtra, India", packaging: "Boxes 5 Kg", quality: "Export Quality" },
    ],
  },
  {
    id: "premium-fruits",
    name: "Premium Fruits",
    icon: "Apple",
    image: catFruits,
    description: "Handpicked premium fruits from tropical and subtropical regions of India.",
    products: [
      { name: "Alphonso Mangoes", slug: "alphonso-mangoes", image:alphonsoMangoes,origin: "Ratnagiri, India", quality: "Premium Export", exportCountries: ["USA", "UK", "UAE", "Japan"], certifications: ["APEDA", "GI Tag"] },
      { name: "Pomegranates", slug: "pomegranates", image: pomegranates, origin: "Maharashtra, India", quality: "Grade A Export" },
      { name: "Bananas", slug: "bananas", image: bananas, origin: "Tamil Nadu, India", quality: "Export Quality" },
      { name: "Grapes", slug: "grapes", image: grapes, origin: "Nashik, India", quality: "Premium Export", certifications: ["GlobalGAP"] },
      { name: "Guava", slug: "guava", image: guava, origin: "Uttar Pradesh, India", quality: "Grade A" },
      { name: "Papaya", slug: "papaya", image: papaya, origin: "Gujarat, India", quality: "Export Quality" },
    ],
  },
  {
    id: "premium-spices",
    name: "Premium Spices",
    icon: "Flame",
    image: catSpices,
    description: "Aromatic Indian spices sourced directly from spice plantations, known worldwide for superior quality.",
    products: [
      { name: "Turmeric Powder", slug: "turmeric-powder", image:turmericPowder,origin: "Erode, Tamil Nadu", moisture: "Max 10%", quality: "High Curcumin", exportCountries: ["USA", "UK", "Germany", "Japan"], certifications: ["FSSAI", "Spice Board", "ISO"] },
      { name: "Red Chilli Powder", slug: "red-chilli-powder",image:redChilliPowder, origin: "Guntur, Andhra Pradesh", quality: "Export Grade" },
      { name: "Cumin Seeds", slug: "cumin-seeds", image: cuminSeeds, origin: "Gujarat, India", quality: "Singapore/Europe Quality" },
      { name: "Black Pepper", slug: "black-pepper", image: blackPepper, origin: "Kerala, India", quality: "ASTA Grade" },
      { name: "Cardamom", slug: "cardamom", image: cardamom, origin: "Kerala, India", quality: "Bold Green" },
      { name: "Coriander Seeds", slug: "coriander-seeds", image: corianderSeeds, origin: "Rajasthan, India", quality: "Eagle Quality" },
      { name: "Fenugreek Seeds", slug: "fenugreek-seeds", image: fenugreekSeeds, origin: "Rajasthan, India", quality: "Sortex Clean" },
      { name: "Cinnamon Sticks", slug: "cinnamon-sticks", image: cinnamonSticks, origin: "Kerala, India", quality: "Premium Grade" },
    ],
  },
  {
    id: "basmati-rice",
    name: "Basmati & Non-Basmati Rice",
    icon: "Wheat",
    image: catRice,
    description: "Finest Basmati and Non-Basmati rice varieties from the foothills of the Himalayas.",
    products: [
      { name: "1121 Basmati Rice", slug: "1121-basmati",image:basmatiRice1, origin: "Punjab, India", moisture: "Max 12.5%", quality: "Extra Long Grain", exportCountries: ["UAE", "Saudi Arabia", "Iraq", "Iran", "Yemen"], certifications: ["APEDA", "BIS", "FSSAI"], specifications: { Length: "8.30mm+", "Broken %": "Max 2%", "Average Grain Length": "8.35mm" } },
      { name: "1509 Basmati Rice", slug: "1509-basmati", image: basmatiRice2, origin: "Haryana, India", quality: "Long Grain" },
      { name: "Pusa Basmati Rice", slug: "pusa-basmati", image: basmatiRice3, origin: "Punjab, India", quality: "Aromatic Long Grain" },
      { name: "Sella Basmati Rice", slug: "sella-basmati", image: basmatiRice4, origin: "Punjab, India", quality: "Golden Parboiled" },
      { name: "IR-64 Non-Basmati", slug: "ir64-rice", image: basmatiRice5, origin: "Andhra Pradesh, India", quality: "Medium Grain" },
      { name: "Sona Masoori Rice", slug: "sona-masoori", image: basmatiRice6, origin: "Karnataka, India", quality: "Premium Short Grain" },
    ],
  },
  {
    id: "oil-seeds",
    name: "Oil Seeds",
    icon: "CircleDot",
    image: catOilseeds,
    description: "High-quality oil seeds meeting international food safety and quality standards.",
    products: [
      { name: "Sesame Seeds (White)", slug: "white-sesame", image: sesameSeedswhite, origin: "Gujarat, India", quality: "99.95% Purity", exportCountries: ["Japan", "Korea", "China", "USA"], certifications: ["FSSAI", "ISO 22000"] },
      { name: "Sesame Seeds (Black)", slug: "black-sesame",image:sesameSeedsblack, origin: "Rajasthan, India", quality: "99.90% Purity" },
      { name: "Groundnut Kernels", slug: "groundnut-kernels", image: groundnutKernels, origin: "Gujarat, India", quality: "Bold / Java" },
      { name: "Mustard Seeds", slug: "mustard-seeds", image: mustardSeeds, origin: "Rajasthan, India", quality: "Sortex Clean" },
      { name: "Niger Seeds", slug: "niger-seeds", image: nigerSeeds, origin: "Ethiopia", quality: "Export Grade" },
      { name: "Sunflower Seeds", slug: "sunflower-seeds", image: sunflowerSeeds, origin: "Karnataka, India", quality: "Confectionery Grade" },
    ],
  },
  {
    id: "grains",
    name: "Grains & Pulses",
    icon: "Grip",
    image: catGrains,
    description: "Nutrient-rich grains and pulses from India's agricultural heartland.",
    products: [
      { name: "Wheat", slug: "wheat",image:wheat ,origin: "Madhya Pradesh, India", quality: "Milling Quality" },
      { name: "Chickpeas (Kabuli)", slug: "kabuli-chickpeas",image: chickpeas, origin: "Rajasthan, India", quality: "9mm / 10mm / 12mm" },
      { name: "Green Mung Beans", slug: "green-mung", image: greenMung, origin: "Rajasthan, India", quality: "Machine Clean" },
      { name: "Red Lentils (Masoor)", slug: "red-lentils", image: redLentils, origin: "Madhya Pradesh, India", quality: "Football / Split" },
      { name: "Yellow Lentils (Toor)", slug: "toor-dal", image: yellowLentils, origin: "Maharashtra, India", quality: "Polished / Oily" },
      { name: "Millet (Bajra)", slug: "bajra-millet", image: millet, origin: "Rajasthan, India", quality: "Sortex Clean" },
    ],
  },
  {
    id: "oils",
    name: "Edible Oils",
    icon: "Droplets",
    image: catOils,
    description: "Pure and refined edible oils for culinary and industrial applications.",
    products: [
      { name: "Groundnut Oil", slug: "groundnut-oil", image: groundnutOil, origin: "Gujarat, India", quality: "Cold Pressed / Refined" },
      { name: "Sesame Oil", slug: "sesame-oil",image:sesameOil, origin: "Tamil Nadu, India", quality: "Cold Pressed" },
      { name: "Sunflower Oil", slug: "sunflower-oil", image: sunflowerOil, origin: "Karnataka, India", quality: "Refined" },
      { name: "Mustard Oil", slug: "mustard-oil", image: mustardOil, origin: "Rajasthan, India", quality: "Kachi Ghani" },
      { name: "Coconut Oil", slug: "coconut-oil", image: coconutOil, origin: "Kerala, India", quality: "Virgin / Refined" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProduct = (categoryId: string, slug: string) => {
  const cat = getCategory(categoryId);
  return cat?.products.find((p) => p.slug === slug);
};
