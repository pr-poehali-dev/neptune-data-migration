export default function RSVP() {
  return (
    <div id="rsvp" className="bg-[#fdf9f6] px-6 py-16">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          Чтобы узнать подробности о свадьбе, отправьте SMS на номер{" "}
          <a
            href="sms:89897081239"
            className="text-stone-800 font-normal border-b border-stone-400 hover:border-stone-700 transition-colors"
          >
            8 989 708 12 39
          </a>
          {" "}— Нина Эдуардовна ответит на все ваши вопросы.
        </p>
      </div>
    </div>
  );
}
