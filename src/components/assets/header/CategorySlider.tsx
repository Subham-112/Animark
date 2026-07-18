"use client";

import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Anime",
    image: "/images/categories/anime.jpg",
    href: "/assets?category=anime",
    active: true,
  },
  {
    title: "Fantasy",
    image: "/images/categories/fantasy.jpg",
    href: "/assets?category=fantasy",
  },
  {
    title: "Cyberpunk",
    image: "/images/categories/cyberpunk.jpg",
    href: "/assets?category=cyberpunk",
  },
  {
    title: "School",
    image: "/images/categories/school.jpg",
    href: "/assets?category=school",
  },
  {
    title: "Chibi",
    image: "/images/categories/chibi.jpg",
    href: "/assets?category=chibi",
  },
  {
    title: "Warrior",
    image: "/images/categories/warrior.jpg",
    href: "/assets?category=warrior",
  },
];

export const CategorySlider = () => {
  return (
    <div className="custom-scrollbar flex gap-6 overflow-x-auto py-4">
      {categories.map((category) => (
        <div key={category.title} className="min-w-[260px] flex-1">
          <CategoryCard {...category} />
        </div>
      ))}
    </div>
  );
};
