"use client";

import { CheckCircle2 } from "lucide-react";

interface LearningPathProps {
  lessons: {
    title: string;
  }[];
}

export const LearningPath = ({ lessons }: LearningPathProps) => {
  return (
    <div className="mt-8 space-y-4">
      {lessons.map((lesson, index) => (
        <div
          key={lesson.title}
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-all duration-300 hover:translate-x-2 hover:border-violet-400/20 hover:bg-violet-500/5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-violet-300">
            <CheckCircle2 size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm text-slate-500">Lesson {index + 1}</p>

            <h4 className="mt-1 font-semibold text-white">
              {lesson.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};
