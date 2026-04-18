export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-[#2c2420] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-stone-400 text-xs tracking-widest font-light">Детали дня</h3>
                <span className="text-stone-200 text-sm sm:text-base font-light">6 июня 2026</span>
                <span className="text-stone-200 text-sm sm:text-base font-light">Сбор гостей 13:40</span>
                <span className="text-stone-200 text-sm sm:text-base font-light">ул. Ленина, 94</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-stone-400 text-xs tracking-widest font-light">Дресс-код</h3>
                <span className="text-stone-200 text-sm sm:text-base font-light">Пастельные тона</span>
                <span className="text-stone-200 text-sm sm:text-base font-light">Романтичный стиль</span>
                <span className="text-stone-200 text-sm sm:text-base font-light">Лёгкая атмосфера</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-stone-200/20 font-light tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Нина & Дмитрий
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm font-light tracking-widest uppercase">С любовью · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
