export interface UpcomingBadge {
  label: string;
  color: string;
}

export interface UpcomingCreator {
  name: string;
  avatar: string;
}

export interface UpcomingCharacter {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  releaseDate: string;
  category: string;
  creator: UpcomingCreator;
  badge?: UpcomingBadge;
  notifyCount: number;
  tags: string[];
}