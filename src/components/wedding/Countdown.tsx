import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WEDDING = new Date("2027-01-09T15:00:00");

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const labels = {
  en: { months: "Months", days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
  es: { months: "Meses", days: "Días", hours: "Horas", minutes: "Min", seconds: "Seg" },
  sv: { months: "Månader", days: "Dagar", hours: "Timmar", minutes: "Min", seconds: "Sek" },
};

const calc = (): TimeLeft => {
  const now = new Date();
  const diff = Math.max(0, WEDDING.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  let months = (WEDDING.getFullYear() - now.getFullYear()) * 12 + (WEDDING.getMonth() - now.getMonth());
  let days = WEDDING.getDate() - now.getDate();
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
  if (diff === 0) months = days = 0;

  return { months, days, hours: totalHours % 24, minutes: totalMinutes % 60, seconds: totalSeconds % 60 };
};

/** Live countdown as a quiet row of numbers. */
const Countdown = () => {
  const { language } = useLanguage();
  const [t, setT] = useState<TimeLeft>(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const l = labels[language];
  const parts: Array<[number, string]> = [
    [t.months, l.months],
    [t.days, l.days],
    [t.hours, l.hours],
    [t.minutes, l.minutes],
    [t.seconds, l.seconds],
  ];

  return (
    <div className="flex gap-5 md:gap-7 [font-variant-numeric:tabular-nums]">
      {parts.map(([value, label]) => (
        <div key={label} className="flex flex-col">
          <span className="font-display text-2xl md:text-3xl text-charcoal leading-none">{value}</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
