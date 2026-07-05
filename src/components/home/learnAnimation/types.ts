export interface CourseCategory {
  title: string;
  icon: string;
}

export interface CourseLesson {
  title: string;
}

export interface FeaturedCourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  lessons: CourseLesson[];
  buttonLabel: string;
  buttonLink: string;
}
