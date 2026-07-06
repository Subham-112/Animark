import { HeroSlideData } from "./types";
import character from "@/assets/images/character.png";
import animation from "@/assets/images/animation.png";
import course from "@/assets/images/course.png";
import seller from "@/assets/images/seller.png";

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    badge: "✨ Premium Marketplace",

    title: "Create Amazing",
    highlight: "2D Characters",

    description:
      "Explore thousands of professionally crafted 2D characters for games, apps, websites and creative projects. Instant download with commercial licenses.",

    image: character,

    primaryButton: {
      label: "Browse Assets",
      href: "/products",
    },

    secondaryButton: {
      label: "Become Seller",
      href: "/seller",
    },

    stats: [
      {
        value: "12K+",
        label: "Assets",
      },
      {
        value: "850+",
        label: "Artists",
      },
      {
        value: "30K+",
        label: "Downloads",
      },
    ],
  },

  {
    id: 2,

    badge: "🎮 Game Ready",

    title: "Professional",
    highlight: "Animations",

    description:
      "Ready-to-use animation packs including idle, walk, attack, jump and combat animations for every game genre.",

    image: animation,

    primaryButton: {
      label: "Explore Animation",
      href: "/animation",
    },

    secondaryButton: {
      label: "View Collection",
      href: "/animation",
    },

    stats: [
      {
        value: "4K+",
        label: "Animations",
      },
      {
        value: "300+",
        label: "Creators",
      },
      {
        value: "99%",
        label: "Game Ready",
      },
    ],
  },

  {
    id: 3,

    badge: "📚 Learn From Experts",

    title: "Master",
    highlight: "2D Animation",

    description:
      "Step-by-step premium animation courses taught by industry professionals. Learn from beginner to advanced.",

    image: course,

    primaryButton: {
      label: "Start Learning",
      href: "/courses",
    },

    secondaryButton: {
      label: "View Courses",
      href: "/courses",
    },

    stats: [
      {
        value: "150+",
        label: "Courses",
      },
      {
        value: "20K+",
        label: "Students",
      },
      {
        value: "4.9★",
        label: "Rating",
      },
    ],
  },

  {
    id: 4,
    badge: "💰 Sell Worldwide",
    title: "Turn Your Art",
    highlight: "Into Income",
    description:
      "Open your digital store, sell characters, animation assets and courses to creators around the world.",
    image: seller,
    primaryButton: {
      label: "Start Selling",
      href: "/seller",
    },
    secondaryButton: {
      label: "Seller Guide",
      href: "/seller/guide",
    },
    stats: [
      {
        value: "₹12L+",
        label: "Paid to Sellers",
      },
      {
        value: "500+",
        label: "Verified Sellers",
      },
      {
        value: "2K+",
        label: "Products Sold",
      },
    ],
  },
];
