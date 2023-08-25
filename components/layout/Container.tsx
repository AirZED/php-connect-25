import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "max-w-[1440px] px-[27px] md:px-10 xl:px-16 mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Container;
