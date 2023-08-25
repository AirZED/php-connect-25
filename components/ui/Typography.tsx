import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-[95px] leading-normal font-medium font-heading text-white",
      h2: "text-[95px] leading-[90%]  font-medium font-heading text-white",
      h3: "text-[48px] leading-normal font-medium font-heading text-white",
      h4: "text-[48px] leading-normal font-medium font-heading text-white",
      h6: "text-lg leading-7 font-normal font-heading text-white tracking-[0.54px]",
      p: "text-lg leading-normal font-medium font-heading text-white ",
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
