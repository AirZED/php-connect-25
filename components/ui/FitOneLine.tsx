import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders children on a single, non-wrapping line, uniformly scaled down
 * (never up) so they always fit the available width — used for display
 * headings whose font-size alone can't guarantee a one-line fit at every
 * viewport width.
 */
export default function FitOneLine({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      const containerWidth = container.clientWidth;
      const textWidth = text.scrollWidth;
      if (containerWidth <= 0 || textWidth <= 0) return;
      setScale(Math.min(1, containerWidth / textWidth));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div
        ref={textRef}
        style={{ transform: `scale(${scale})`, transformOrigin: "left" }}
        className={cn("inline-block whitespace-nowrap", className)}
      >
        {children}
      </div>
    </div>
  );
}
