import { useState } from "react";

export default function RSVP() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/bb709fe3-9f2f-4bd2-8622-7d6bb5a817c6", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastName, firstName, middleName, phone, attending, guests: Number(guests), message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div id="rsvp" className="min-h-[50vh] bg-[#fdf9f6] flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <p className="text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Спасибо!</p>
          <p className="text-stone-500 text-sm font-light">Мы получили ваш ответ и очень ждём вас.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="rsvp" className="bg-[#fdf9f6] px-6 py-20">
      <div className="max-w-lg mx-auto">
        <h2
          className="text-4xl md:text-5xl font-light text-stone-800 mb-2 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Подтверждение присутствия
        </h2>
        <p className="text-center text-stone-400 text-xs uppercase tracking-widest mb-10 font-light">
          Пожалуйста, ответьте до 20 мая 2026
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
              Фамилия
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Иванова"
              className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
              Имя
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Мария"
              className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
              Отчество
            </label>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Петровна"
              className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
              Номер телефона
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors placeholder:text-stone-300"
            />
            <p className="text-xs text-stone-400 font-light mt-1.5">
              На этот номер придёт SMS с подтверждением — тел. организатора: 8 989 708 12 39
            </p>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-3 font-light">
              Смогу присутствовать?
            </label>
            <div className="flex gap-4">
              {[
                { value: "yes", label: "Да, буду!" },
                { value: "no", label: "К сожалению, нет" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAttending(opt.value as "yes" | "no")}
                  className={`flex-1 py-2.5 text-xs uppercase tracking-widest border transition-all duration-200 font-light ${
                    attending === opt.value
                      ? "bg-stone-700 text-white border-stone-700"
                      : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-500"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {attending === "yes" && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
                Количество гостей
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "гость" : "гостя"}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light">
              Пожелание молодожёнам (необязательно)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ваши тёплые слова..."
              rows={3}
              className="w-full border-b border-stone-300 bg-transparent py-2 text-stone-700 text-sm font-light outline-none focus:border-stone-600 transition-colors resize-none placeholder:text-stone-300"
            />
          </div>

          <button
            type="submit"
            disabled={!attending || status === "loading"}
            className="mt-2 py-3 bg-stone-700 text-white text-xs uppercase tracking-widest font-light transition-all duration-200 hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Отправляем..." : "Отправить ответ"}
          </button>

          {status === "error" && (
            <p className="text-center text-rose-400 text-xs font-light">
              Что-то пошло не так. Попробуйте ещё раз.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}