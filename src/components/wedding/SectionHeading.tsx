interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

/**
 * Left-aligned section header with a hairline above. Sits on the same
 * three-column grid as section content: title in column 1, intro in 2–3.
 */
const SectionHeading = ({ eyebrow, title, intro }: Props) => (
  <div className="border-t border-charcoal/70 pt-5 mb-8 md:mb-10 grid md:grid-cols-3 gap-3 md:gap-10">
    <div>
      {eyebrow && <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold mb-1">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">{title}</h2>
    </div>
    {intro && (
      <p className={`md:col-span-2 font-body text-sm md:text-base text-charcoal/75 leading-relaxed max-w-prose ${eyebrow ? "md:pt-[26px]" : ""}`}>
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeading;
