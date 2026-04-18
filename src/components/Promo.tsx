import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/files/dc32d7d4-e89d-4cd1-bafc-42fa372bfad3.jpeg"
            alt="Дмитрий в детстве"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white/70 uppercase z-10 text-xs tracking-[0.3em] font-light">
        С любовью и нетерпением ждём вас
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 font-light leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Будем бесконечно счастливы видеть вас среди наших гостей в этот особенный день.
      </p>
    </div>
  );
}
