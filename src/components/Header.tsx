interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xs uppercase tracking-[0.3em] opacity-80 font-light">6 июня 2026</div>
        <nav className="flex gap-8">
          <a
            href="#details"
            className="text-white hover:text-rose-200 transition-colors duration-300 uppercase text-xs tracking-widest font-light"
          >
            Детали
          </a>
          <a
            href="#wishes"
            className="text-white hover:text-rose-200 transition-colors duration-300 uppercase text-xs tracking-widest font-light"
          >
            Пожелания
          </a>
        </nav>
      </div>
    </header>
  );
}
