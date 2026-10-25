interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

/** Left-aligned section header with a hairline above. */
const SectionHeading = ({ eyebrow, title, intro }: Props) => (
  <div className="border-t border-charcoal/70 pt-5 mb-8 md:mb-10 grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 md:gap-10">
    <div>
      {eyebrow && <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold mb-1">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">{title}</h2>
    </div>
    {intro && <p className="font-body text-sm md:text-base text-charcoal/75 leading-relaxed self-end max-w-prose">{intro}</p>}
  </div>
);

export default SectionHeading;
