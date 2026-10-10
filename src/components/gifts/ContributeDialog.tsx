import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ExternalLink, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { payment, MXN_PER_SEK, type GiftItem } from "@/config/gifts";
import { swishDeepLink, swishQrPayload, isMobile } from "@/lib/swish";
import CopyField from "./CopyField";

interface Props {
  item: GiftItem | null;
  initialAmountSek?: number;
  onClose: () => void;
}

const roundMxn = (sek: number) => Math.round((sek * MXN_PER_SEK) / 50) * 50;

const ContributeDialog = ({ item, initialAmountSek, onClose }: Props) => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [amountSek, setAmountSek] = useState<number | "">(initialAmountSek ?? "");

  // Swedes see Swish first, everyone else sees Wise first.
  const defaultTab = language === "sv" ? "swish" : "wise";

  const message = useMemo(() => {
    if (!item) return "";
    return name.trim() ? `${item.reference} - ${name.trim()}` : item.reference;
  }, [item, name]);

  const amountMxn = amountSek === "" ? "" : roundMxn(amountSek);

  if (!item) return null;

  const paypalUrl = `https://paypal.me/${payment.paypal.handle}${amountMxn === "" ? "" : `/${amountMxn}MXN`}`;

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
            <Label htmlFor="gift-amount" className="font-sans text-xs text-charcoal/70">{t.gifts.amount} (SEK)</Label>
            <Input
              id="gift-amount"
              type="number"
              inputMode="numeric"
              min={0}
              value={amountSek}
              onChange={(e) => setAmountSek(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
              placeholder={t.gifts.amountPlaceholder}
              className="bg-white/70"
            />
          </div>
          <div>
            <Label className="font-sans text-xs text-charcoal/70">{t.gifts.approx} MXN</Label>
            <div className="h-10 flex items-center px-3 rounded-md border border-input bg-white/40 text-sm font-body text-charcoal/70">
              {amountMxn === "" ? "–" : `$${amountMxn.toLocaleString("es-MX")}`}
            </div>
          </div>
        </div>

        <Tabs defaultValue={defaultTab} className="mt-2">
          <TabsList className="grid grid-cols-4 w-full bg-sage-muted">
            <TabsTrigger value="swish">{t.gifts.swishTab}</TabsTrigger>
            <TabsTrigger value="wise">{t.gifts.wiseTab}</TabsTrigger>
            <TabsTrigger value="bank">{t.gifts.bankTab}</TabsTrigger>
            <TabsTrigger value="paypal">{t.gifts.paypalTab}</TabsTrigger>
          </TabsList>

          {/* Swish */}
          <TabsContent value="swish" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.swishHelp}</p>
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

          {/* Mexican bank (SPEI) */}
          <TabsContent value="bank" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.bankHelp}</p>
            <CopyField label={t.gifts.holder} value={payment.bankMx.holder} />
            <CopyField label={t.gifts.bank} value={payment.bankMx.bank} />
            <CopyField label={t.gifts.clabe} value={payment.bankMx.clabe} mono />
            <CopyField label={t.gifts.concept} value={message} />
          </TabsContent>

          {/* PayPal */}
          <TabsContent value="paypal" className="space-y-3">
            <p className="font-body text-sm text-charcoal/70">{t.gifts.paypalHelp}</p>
            <Button asChild className="w-full bg-[#0070ba] text-white hover:bg-[#005ea6] font-sans font-semibold">
              <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
                {t.gifts.openPaypal}
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
