import {
  Boxes,
  CircleHelp,
  FileText,
  GraduationCap,
  LogIn,
  Mail,
  ShieldCheck,
  Sparkles,
  Store,
  UserPlus,
} from "lucide-react";

export const userMenuItems = [
  {
    title: "Login",
    description: "Access your account",
    href: "/login",
    icon: LogIn,
  },
  {
    title: "Create Account",
    description: "Join Animark today",
    href: "/signup",
    icon: UserPlus,
  },

  {
    divider: true,
  },

  {
    title: "Become a Seller",
    description: "Start selling your assets",
    href: "/seller",
    icon: Store,
  },
  {
    title: "Browse Assets",
    description: "Explore premium 2D assets",
    href: "/products",
    icon: Boxes,
  },
  {
    title: "Animation Packs",
    description: "Ready-to-use animations",
    href: "/animation",
    icon: Sparkles,
  },
  {
    title: "Courses",
    description: "Learn from professionals",
    href: "/courses",
    icon: GraduationCap,
  },

  {
    divider: true,
  },

  {
    title: "Help Center",
    description: "FAQs and guides",
    href: "/help",
    icon: CircleHelp,
  },
  {
    title: "Contact Us",
    description: "We're here to help",
    href: "/contact",
    icon: Mail,
  },
  {
    title: "Privacy Policy",
    description: "How we protect your data",
    href: "/privacy-policy",
    icon: ShieldCheck,
  },
  {
    title: "Terms & Conditions",
    description: "Read our platform rules",
    href: "/terms-and-conditions",
    icon: FileText,
  },
] as const;