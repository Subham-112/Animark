"use client";

import { courseCategories } from "./data";

export const CourseCategories = () => {
  return (
    <div className="mt-12">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">What You'll Learn</h3>

        <p className="mt-2 text-slate-400">
          Structured learning paths designed for every stage of your animation
          journey.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
        {courseCategories.map((category) => (
          <div
            key={category.title}
            className="group rounded-3xl border border-white/10 bg-[#0B1228] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-500/5 hover:shadow-[0_20px_50px_rgba(124,58,237,.15)]"
          >
            <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
              {category.icon}
            </div>

            <h4 className="text-lg font-semibold text-white">
              {category.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
