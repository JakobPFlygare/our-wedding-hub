import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  label: string;
  value: string;
  mono?: boolean;
}

/** A labelled value with a copy-to-clipboard button. */
const CopyField = ({ label, value, mono }: Props) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable: value is still selectable */
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-ivory/80 rounded-lg px-3 py-2 border border-sage-light/30">
      <div className="min-w-0">
        <p className="font-sans text-[10px] uppercase tracking-wider text-sage">{label}</p>
        <p className={`text-sm text-charcoal break-all select-all ${mono ? "font-mono" : "font-body"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 inline-flex items-center gap-1 text-xs font-sans text-charcoal/70 hover:text-charcoal px-2 py-1 rounded-md hover:bg-sage/10 transition-colors"
        aria-label={`${t.gifts.copy} ${label}`}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-sage" /> : <Copy className="w-3.5 h-3.5" />}
        {copied ? t.gifts.copied : t.gifts.copy}
      </button>
    </div>
  );
};

export default CopyField;
