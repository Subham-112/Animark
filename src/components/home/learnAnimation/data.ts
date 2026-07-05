import { CourseCategory, FeaturedCourse } from "./types";

export const featuredCourse: FeaturedCourse = {
  id: 1,
  title: "Complete 2D Character Animation",
  slug: "complete-2d-character-animation",
  description:
    "Master professional 2D character animation from beginner to advanced through structured lessons and practical projects.",
  image: "/images/courses/featured-course.png",
  level: "Beginner → Advanced",
  duration: "32+ Hours",
  buttonLabel: "Explore Courses",
  buttonLink: "/courses",
  lessons: [
    {
      title: "Character Design",
    },
    {
      title: "Walk Cycle",
    },
    {
      title: "Idle Animation",
    },
    {
      title: "Attack Animation",
    },
  ],
};

export const courseCategories: CourseCategory[] = [
  {
    title: "Beginner",
    icon: "🌱",
  },
  {
    title: "Character Design",
    icon: "🎨",
  },
  {
    title: "Rigging",
    icon: "🦴",
  },
  {
    title: "Walk Cycle",
    icon: "🚶",
  },
  {
    title: "Facial Animation",
    icon: "😊",
  },
  {
    title: "Advanced",
    icon: "🚀",
  },
];
