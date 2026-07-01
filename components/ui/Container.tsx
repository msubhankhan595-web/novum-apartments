import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
}

/**
 * Container  consistent horizontal padding & max-width.
 */
export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}