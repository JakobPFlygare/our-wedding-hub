import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const labels = {
    en: { years: "Years", months: "Months", days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
    es: { years: "Años", months: "Meses", days: "Días", hours: "Horas", minutes: "Min", seconds: "Seg" },
    sv: { years: "År", months: "Månader", days: "Dagar", hours: "Timmar", minutes: "Min", seconds: "Sek" },
  };

  useEffect(() => {
    const weddingDate = new Date("2027-01-09T15:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        
        // Calculate years, months, days more accurately
        let years = 0;
        let months = 0;
        let days = 0;
        
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth();
        const nowDay = now.getDate();
        
        const targetYear = weddingDate.getFullYear();
        const targetMonth = weddingDate.getMonth();
        const targetDay = weddingDate.getDate();
        
        years = targetYear - nowYear;
        months = targetMonth - nowMonth;
        days = targetDay - nowDay;
        
        if (days < 0) {
          months--;
          const lastMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
          days += lastMonth.getDate();
        }
        
        if (months < 0) {
          years--;
          months += 12;
        }

        setTimeLeft({
          years,
          months,
          days,
          hours: totalHours % 24,
          minutes: totalMinutes % 60,
          seconds: totalSeconds % 60,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentLabels = labels[language];

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-charcoal/80 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-4 md:py-3 min-w-[40px] md:min-w-[60px]">
        <span className="font-display text-lg md:text-3xl text-ivory">{value}</span>
      </div>
      <span className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-charcoal/80 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-6 md:mb-8">
      <TimeBlock value={timeLeft.years} label={currentLabels.years} />
      <TimeBlock value={timeLeft.months} label={currentLabels.months} />
      <TimeBlock value={timeLeft.days} label={currentLabels.days} />
      <TimeBlock value={timeLeft.hours} label={currentLabels.hours} />
      <TimeBlock value={timeLeft.minutes} label={currentLabels.minutes} />
      <TimeBlock value={timeLeft.seconds} label={currentLabels.seconds} />
    </div>
  );
};

export default Countdown;
