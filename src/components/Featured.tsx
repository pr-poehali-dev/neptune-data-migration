export default function Featured() {
  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-[#faf8f5]">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/files/3b9ab84a-decf-4409-8459-ce514b4c7bf7.jpeg"
          alt="Нина в детстве"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="wishes" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-6 text-xs tracking-[0.3em] text-stone-400 font-light">Пожелания гостям</h3>
        <p className="text-3xl lg:text-5xl mb-8 text-stone-800 leading-tight font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Мы хотели бы, чтобы этот день остался в памяти как нежный и трогательный праздник.
        </p>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-start gap-4">
            <span className="text-rose-300 text-lg mt-0.5">✦</span>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Пожалуйста, воздержитесь от традиционного «горько» — нам хочется, чтобы атмосфера была лёгкой и романтичной.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-rose-300 text-lg mt-0.5">✦</span>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Будем благодарны, если вы выберете для праздника одежду в пастельных тонах — это поможет создать утончённый и гармоничный образ торжества.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
