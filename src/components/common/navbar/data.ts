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

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Assets",
    href: "/assets",
    menu: [
      {
        title: "Browse",
        items: [
          {
            label: "Characters",
            href: "/assets/characters",
          },
          {
            label: "Backgrounds",
            href: "/assets/backgrounds",
          },
          {
            label: "Animals",
            href: "/assets/animals",
          },
          {
            label: "Props",
            href: "/assets/props",
          },
          {
            label: "UI Kits",
            href: "/assets/ui-kits",
          },
          {
            label: "Icons",
            href: "/assets/icons",
          },
          {
            label: "VFX",
            href: "/assets/vfx",
          },
          {
            label: "Vehicles",
            href: "/assets/vehicles",
          },
        ],
      },
      {
        title: "Explore",
        items: [
          {
            label: "Trending",
            href: "/assets/trending",
          },
          {
            label: "New Releases",
            href: "/assets/new",
          },
          {
            label: "Best Sellers",
            href: "/assets/best-selling",
          },
          {
            label: "Featured",
            href: "/assets/featured",
          },
        ],
      },
    ],
  },
  {
    title: "Creators",
    href: "/creators",
    menu: [
      {
        title: "Marketplace",
        items: [
          {
            label: "Top Sellers",
            href: "/creators/top",
          },
          {
            label: "Featured Studios",
            href: "/creators/studios",
          },
          {
            label: "New Creators",
            href: "/creators/new",
          },
        ],
      },
      {
        title: "Sell",
        items: [
          {
            label: "Become a Seller",
            href: "/sell",
          },
          {
            label: "Seller Dashboard",
            href: "/seller",
          },
          {
            label: "Guidelines",
            href: "/seller/guidelines",
          },
        ],
      },
    ],
  },
  {
    title: "Free",
    href: "/free",
    menu: [
      {
        title: "Free Assets",
        items: [
          {
            label: "Characters",
            href: "/free/characters",
          },
          {
            label: "Backgrounds",
            href: "/free/backgrounds",
          },
          {
            label: "Weekly Freebies",
            href: "/free/weekly",
          },
          {
            label: "Tutorials",
            href: "/free/tutorials",
          },
        ],
      },
    ],
  },
];
