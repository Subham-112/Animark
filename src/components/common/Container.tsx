import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className = "",
}: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-9xl px-6 lg:px-8 xl:px-10 ${className}`}>
      {children}
    </div>
  );
};