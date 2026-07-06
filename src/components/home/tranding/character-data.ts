import { TrendingCharacter } from "./types";

import samurai from "@/assets/images/cyber-samurai.png";
import archer from "@/assets/images/fantasy-archer.png";
import explorer from "@/assets/images/space-explorer.png";
import ninja from "@/assets/images/ninja-assassin.png";
import wizard from "@/assets/images/cute-wizard.png"
import soldier from "@/assets/images/robot-soldier.png";
import pirate from "@/assets/images/pirate-captain.png";
import zombie from "@/assets/images/zombie-hunter.png";

export const trendingCharacters: TrendingCharacter[] = [
  {
    id: 1,
    title: "Cyber Samurai",
    slug: "cyber-samurai",
    image: samurai,
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    totalSales: 1432,
    category: "Game Character",
    badge: {
      label: "Best Seller",
      color: "#A855F7",
    },
    author: {
      name: "Pixel Studio",
      avatar: "/images/creators/pixel-studio.png",
    },
    tags: ["Game", "RPG", "PNG"],
  },

  {
    id: 2,
    title: "Fantasy Archer",
    slug: "fantasy-archer",
    image: archer,
    price: 349,
    rating: 4.8,
    totalSales: 962,
    category: "Fantasy",
    badge: {
      label: "Trending",
      color: "#06B6D4",
    },
    author: {
      name: "Artify",
      avatar: "/images/creators/artify.png",
    },
    tags: ["Fantasy", "Archer"],
  },

  {
    id: 3,
    title: "Space Explorer",
    slug: "space-explorer",
    image: explorer,
    price: 449,
    originalPrice: 699,
    rating: 5,
    totalSales: 1824,
    category: "Sci-Fi",
    badge: {
      label: "Hot",
      color: "#F97316",
    },
    author: {
      name: "Nova Studio",
      avatar: "/images/creators/nova.png",
    },
    tags: ["Sci-Fi", "Astronaut"],
  },

  {
    id: 4,
    title: "Ninja Assassin",
    slug: "ninja-assassin",
    image: ninja,
    price: 299,
    rating: 4.7,
    totalSales: 742,
    category: "Action",
    author: {
      name: "Dark Pixel",
      avatar: "/images/creators/dark-pixel.png",
    },
    tags: ["Action", "Ninja"],
  },

  {
    id: 5,
    title: "Cute Wizard",
    slug: "cute-wizard",
    image: wizard,
    price: 259,
    rating: 4.8,
    totalSales: 612,
    category: "Fantasy",
    badge: {
      label: "New",
      color: "#22C55E",
    },
    author: {
      name: "Dream Art",
      avatar: "/images/creators/dream-art.png",
    },

    tags: ["Magic", "Wizard"],
  },

  {
    id: 6,
    title: "Robot Soldier",
    slug: "robot-soldier",
    image: soldier,
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    totalSales: 2103,
    category: "Sci-Fi",

    badge: {
      label: "Editor's Choice",
      color: "#EAB308",
    },

    author: {
      name: "Mecha Works",
      avatar: "/images/creators/mecha.png",
    },

    tags: ["Robot", "Shooter"],
  },

  {
    id: 7,
    title: "Pirate Captain",
    slug: "pirate-captain",
    image: pirate,
    price: 379,
    rating: 4.8,
    totalSales: 881,
    category: "Adventure",

    author: {
      name: "Sea Arts",
      avatar: "/images/creators/sea-arts.png",
    },

    tags: ["Pirate", "Adventure"],
  },

  {
    id: 8,
    title: "Zombie Hunter",
    slug: "zombie-hunter",
    image: zombie,
    price: 429,
    originalPrice: 649,
    rating: 4.9,
    totalSales: 1634,
    category: "Survival",

    badge: {
      label: "Popular",
      color: "#EF4444",
    },

    author: {
      name: "Dead Pixel",
      avatar: "/images/creators/dead-pixel.png",
    },

    tags: ["Zombie", "Survival"],
  },
];
