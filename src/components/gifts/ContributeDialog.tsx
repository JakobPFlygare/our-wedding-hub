import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ExternalLink, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  payment,
  currencies,
  convert,
  defaultCurrency,
  formatAmount,
  type Currency,
  type GiftItem,
} from "@/config/gifts";
import { swishDeepLink, swishQrPayload, isMobile } from "@/lib/swish";
import CopyField from "./CopyField";

interface Props {
  item: GiftItem | null;
  initialAmount?: number;
  initialCurrency?: Currency;
  onClose: () => void;
}

const ContributeDialog = ({ item, initialAmount, initialCurrency, onClose }: Props) => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState<Currency>(initialCurrency ?? defaultCurrency[language]);
  const [amount, setAmount] = useState<number | "">(initialAmount ?? "");

  // Swedes see Swish first, everyone else sees Wise first.
  const defaultTab = language === "sv" ? "swish" : "wise";

  const message = useMemo(() => {
    if (!item) return "";
    return name.trim() ? `${item.reference} - ${name.trim()}` : item.reference;
  }, [item, name]);

  // Switching currency converts whatever is in the box so the value stays comparable.
  const changeCurrency = (next: Currency) => {
    if (amount !== "") setAmount(convert(amount, currency, next));
    setCurrency(next);
  };

  if (!item) return null;

  // Swish only takes SEK.
  const amountSek = amount === "" ? "" : convert(amount, currency, "SEK");
  const paypalUrl = `https://paypal.me/${payment.paypal.handle}${amount === "" ? "" : `/${amount}${currency}`}`;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[92vh] overflow-y-auto bg-ivory">
        <DialogHeader>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">{t.gifts.dialogTitle}</p>
          <DialogTitle className="font-display text-2xl text-charcoal">
            <span className="mr-2">{item.emoji}</span>
            {item.title[language]}
          </DialogTitle>
          <DialogDescription className="font-body text-charcoal/70">{item.description[language]}</DialogDescription>
        </DialogHeader>

        {/* Shared inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <Label htmlFor="gift-name" className="font-sans text-xs text-charcoal/70">{t.gifts.yourName}</Label>
            <Input
              id="gift-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.gifts.yourNamePlaceholder}
              className="bg-white/70"
            />
          </div>
          <div>
            <Label htmlFor="gift-amount" className="font-sans text-xs text-charcoal/70">{t.gifts.amount}</Label>
            <Input
              id="gift-amount"
              type="number"
              inputMode="numeric"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
              placeholder={t.gifts.amountPlaceholder}
              className="bg-white/70"
            />
          </div>
          <div>
            <Label htmlFor="gift-currency" className="font-sans text-xs text-charcoal/70">{t.gifts.currency}</Label>
            <Select value={currency} onValueChange={(v) => changeCurrency(v as Currency)}>
              <SelectTrigger id="gift-currency" className="bg-white/70">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue={defaultTab} className="mt-2">
          <TabsList className="grid grid-cols-3 w-full bg-sage-muted">
            <TabsTrigger value="swish">{t.gifts.swishTab}</TabsTrigger>
            <TabsTrigger value="wise">{t.gifts.wiseTab}</TabsTrigger>
            <TabsTrigger value="paypal">{t.gifts.paypalTab}</TabsTrigger>
          </TabsList>

          {/* Swish */}
          <TabsContent value="swish" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.swishHelp}</p>
            {currency !== "SEK" && amountSek !== "" && (
              <p className="font-body text-sm text-charcoal/70">
                {t.gifts.swishConverted} <strong className="text-charcoal">{formatAmount(amountSek, "SEK")}</strong>
              </p>
            )}
            <div className="flex flex-col items-center gap-2 py-2">
              <div className="bg-white p-3 rounded-xl shadow-soft">
                <QRCodeSVG value={swishQrPayload(payment.swish.number, amountSek, message)} size={168} level="M" />
              </div>
              <p className="font-sans text-[11px] uppercase tracking-wider text-sage">{t.gifts.swishScan}</p>
            </div>
            {isMobile() && (
              <Button asChild className="w-full bg-charcoal text-ivory hover:bg-charcoal/90">
                <a href={swishDeepLink(payment.swish.number, amountSek, message)}>
                  <Smartphone className="w-4 h-4 mr-2" />
                  {t.gifts.openSwish}
                </a>
              </Button>
            )}
            <CopyField label={t.gifts.swishNumber} value={payment.swish.number} mono />
            <CopyField label={t.gifts.message} value={message} />
          </TabsContent>

          {/* Wise */}
          <TabsContent value="wise" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.wiseHelp}</p>
            <Button asChild className="w-full bg-[#9fe870] text-[#163300] hover:bg-[#8fd962] font-sans font-semibold">
              <a href={payment.wise.payLink} target="_blank" rel="noopener noreferrer">
                {t.gifts.openWise}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <CopyField label="Wisetag" value={payment.wise.tag} mono />
            <CopyField label={t.gifts.message} value={message} />
          </TabsContent>

          {/* PayPal */}
          <TabsContent value="paypal" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.paypalHelp}</p>
            <Button asChild className="w-full bg-[#0070ba] text-white hover:bg-[#005ea6] font-sans font-semibold">
              <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
                {t.gifts.openPaypal}
                {amount !== "" && <span className="ml-1 opacity-80">· {formatAmount(amount, currency)}</span>}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <CopyField label="PayPal" value={`paypal.me/${payment.paypal.handle}`} mono />
            <CopyField label={t.gifts.message} value={message} />
          </TabsContent>
        </Tabs>

        <p className="font-body text-sm text-center text-charcoal/60 italic pt-1">{t.gifts.thanks}</p>
      </DialogContent>
    </Dialog>
  );
};

export default ContributeDialog;
