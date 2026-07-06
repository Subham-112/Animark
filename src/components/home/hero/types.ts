import { StaticImageData } from "next/image";

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
  image: StaticImageData;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
  stats: HeroStat[];
}