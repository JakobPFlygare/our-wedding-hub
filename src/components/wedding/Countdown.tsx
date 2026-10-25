import { useLanguage } from "@/contexts/LanguageContext";

const WEDDING = new Date("2027-01-09T15:00:00");

/** One line: "76 days to go". */
const Countdown = () => {
  const { t } = useLanguage();
  const days = Math.max(0, Math.ceil((WEDDING.getTime() - Date.now()) / 86_400_000));

  return (
    <p className="font-display text-xl text-charcoal">
      <span className="text-blush">{days}</span> {t.hero.daysToGo}
    </p>
  );
};

export default Countdown;
