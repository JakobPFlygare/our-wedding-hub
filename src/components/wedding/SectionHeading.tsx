interface Props {
  title: string;
  intro?: string;
}

/** Hairline, title, and an optional paragraph under it. */
const SectionHeading = ({ title, intro }: Props) => (
  <div className="border-t border-charcoal/70 pt-5 mb-8 md:mb-10">
    <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">{title}</h2>
    {intro && <p className="font-body text-base text-charcoal/75 leading-relaxed max-w-[60ch] mt-3">{intro}</p>}
  </div>
);

export default SectionHeading;
