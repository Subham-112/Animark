import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({
  children,
  className = "",
}: GradientTextProps) => {
  return (
    <span
      className={`bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
