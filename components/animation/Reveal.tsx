import { relative } from "path";
import React, { ComponentProps, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element|JSX.Element[]|string;
  width?: "fit-content" | "100%";
  className?: string;
  delay?:number,
  overflow?:string
}
export default function Reveal({
  children,
  width = "fit-content",
  className,
  delay=0.25,
  overflow="hidden"
}: Props) {
  const ref = useRef(null);
  const isInview = useInView(ref,{once:false});

  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInview){
        mainControls.start("visible")
    }
  },[isInview])
  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
