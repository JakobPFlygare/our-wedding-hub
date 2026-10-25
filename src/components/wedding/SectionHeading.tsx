interface Props {
  title: string;
  intro?: string;
}

/** Section title with an optional paragraph under it. */
const SectionHeading = ({ title, intro }: Props) => (
  <div className="mb-8 md:mb-10">
    <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">{title}</h2>
    {intro && <p className="font-body text-base text-charcoal/75 leading-relaxed max-w-[60ch] mt-3">{intro}</p>}
  </div>
);

export default SectionHeading;
