import '@/styles/globals.css'
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { almarai } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const start = (url: string) => {
      // A hash-only change on the same page (e.g. "#speakers") doesn't
      // load a new page, so it shouldn't trigger the loading screen.
      const [path] = url.split("#");
      if (path !== router.asPath.split("#")[0]) setIsNavigating(true);
    };
    const done = () => setIsNavigating(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);

  return (
    <div className={cn(almarai.variable)}>
      <Component {...pageProps} />
      <Analytics />
      <AnimatePresence>{isNavigating && <RouteLoader />}</AnimatePresence>
    </div>
  );
}

const RouteLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
  >
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/images/logo-white.svg"
        alt="PHP Connect"
        width={78}
        height={55}
        className="h-12 w-auto"
        priority
      />
    </motion.div>
  </motion.div>
);
