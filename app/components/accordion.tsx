import { ArrowDown } from "react-feather";

interface AccordionProps {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function Accordion({ label, defaultOpen, children }: AccordionProps) {
  return (
    <details
      name="portfolio"
      open={defaultOpen}
      className="hairline group border-b border-b-black/15 dark:border-b-white/15 py-6"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-3xl md:text-4xl">
        {label}
        <ArrowDown className="chevron shrink-0" size={20} strokeWidth={1.5} />
      </summary>
      <div className="mt-6">{children}</div>
    </details>
  );
}
