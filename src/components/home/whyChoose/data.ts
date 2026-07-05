import {
  BadgeCheck,
  Download,
  Palette,
  ShieldCheck,
  FileBadge,
  Headset,
} from "lucide-react";
import { Feature } from "./types";

export const features: Feature[] = [
  {
    id: 1,
    title: "Verified Creators",
    description:
      "Every creator is reviewed before publishing products to ensure quality and authenticity.",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "Instant Digital Access",
    description:
      "Download purchased 2D characters or access animation courses immediately after successful payment.",
    icon: Download,
  },
  {
    id: 3,
    title: "Premium Quality",
    description:
      "Carefully curated premium 2D characters and structured animation courses built by skilled creators.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Secure Payments",
    description:
      "Protected online payments with trusted payment gateway integration and encrypted transactions.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Commercial Licensing",
    description:
      "Every product includes clear licensing information so you know exactly how it can be used.",
    icon: FileBadge,
  },
  {
    id: 6,
    title: "Dedicated Support",
    description:
      "Fast and friendly support for both customers and creators whenever assistance is needed.",
    icon: Headset,
  },
];