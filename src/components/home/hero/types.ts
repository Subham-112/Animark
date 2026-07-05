export interface HeroButton {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSlideData {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
  stats: HeroStat[];
}