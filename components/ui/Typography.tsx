import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("[line-height:normal] text-white font-heading", {
  variants: {
    variant: {
      h1: "text-[52.33px]  lg:text-[95px] font-medium",
      h2: "text-[52.33px] lg:text-[95px] font-medium",
      h3: "text-[48px] font-medium",
      h4: "text-[48px] font-medium",
      h6: "text-lg leading-7 font-normal tracking-[0.54px]",
      p: "font-base md:text-lg font-medium",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<
  HTMLHeadingElement & HTMLElement,
  TypographyProps
>(function Typography({ className, variant, ...props }, ref) {
  const Comp =
    variant == "h1"
      ? "h1"
      : variant == "h2"
      ? "h2"
      : variant == "h3"
      ? "h3"
      : variant == "h4"
      ? "h4"
      : "p";

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

export default Typography;
