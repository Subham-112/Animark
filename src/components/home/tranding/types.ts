export interface CharacterBadge {
  label: string;
  color: string;
}

export interface CharacterAuthor {
  name: string;
  avatar: string;
}

export interface TrendingCharacter {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  totalSales: number;
  category: string;
  badge?: CharacterBadge;
  author: CharacterAuthor;
  tags: string[];
}