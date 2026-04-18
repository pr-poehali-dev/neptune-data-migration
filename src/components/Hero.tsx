import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/files/0d8c6a31-68e2-4a1a-bb94-b4d9ed40d811.jpeg"
          alt="Обручальные кольца"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-80 font-light">Дорогие наши друзья и родные</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Нина <span className="italic">&</span> Дмитрий
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-base md:text-lg font-light tracking-widest opacity-90 uppercase">
          6 июня 2026 · 13:40 · ул. Ленина, 94
        </p>
      </div>
    </div>
  );
}
