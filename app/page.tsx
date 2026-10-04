import Link from "next/link";
import { Accordion } from "app/components/accordion";
import {
  getCV,
  stripMarkdown,
  formatCVPeriod,
  titleCase,
  type CVEntry,
} from "app/utils";

const isBullet = (entry: CVEntry | string): entry is CVEntry =>
  typeof entry === "object" && "bullet" in entry;

function EntryBody({ entry }: { entry: CVEntry }) {
  const period = formatCVPeriod(entry);
  const highlights = (entry.highlights ?? []).map(stripMarkdown);

  return (
    <>
      {period && <p className="label">{period}</p>}
      {entry.summary && (
        <p className="mt-1 max-w-3xl text-muted">{stripMarkdown(entry.summary)}</p>
      )}
      {highlights.length > 0 && (
        <ul className="item-list mt-2 ml-4 list-disc list-inside text-sm text-muted">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </>
  );
}

function Entry({ entry }: { entry: CVEntry }) {
  const heading = entry.company
    ? [entry.company, entry.position].filter(Boolean).join(", ")
    : entry.institution
      ? [entry.institution, entry.area].filter(Boolean).join(", ")
      : entry.name;

  if (heading) {
    return (
      <div className="space-y-1">
        <h3 className="text-2xl">{stripMarkdown(heading)}</h3>
        <EntryBody entry={entry} />
      </div>
    );
  }

  if (entry.label && entry.details) {
    return (
      <p className="text-muted">
        <span className="font-medium text-primary">{entry.label}:</span>{" "}
        {stripMarkdown(entry.details)}
      </p>
    );
  }

  return null;
}

function SectionEntries({ entries }: { entries: (CVEntry | string)[] }) {
  if (entries.length > 0 && entries.every(isBullet)) {
    return (
      <ul className="item-list ml-4 list-disc list-inside text-muted">
        {entries.map((entry, index) => (
          <li key={index}>{stripMarkdown(entry.bullet!)}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-6">
      {entries.map((entry, index) =>
        typeof entry === "string" ? (
          <p key={index} className="max-w-3xl text-muted">
            {stripMarkdown(entry)}
          </p>
        ) : (
          <Entry key={index} entry={entry} />
        )
      )}
    </div>
  );
}

export default function Page() {
  const cv = getCV();
  const summary = (cv.sections.summary ?? [])
    .map((entry) => (typeof entry === "string" ? entry : entry.summary ?? ""))
    .filter(Boolean)
    .join(" ");
  const sectionTitles = Object.keys(cv.sections).filter(
    (title) => title !== "summary"
  );

  return (
    <section>
      <div className="mb-16 flex flex-col gap-10 md:flex-row md:gap-16">
        <h1 className="text-5xl leading-[1.05] tracking-tight md:w-1/2 md:text-7xl">
          Hey there, I&apos;m {cv.name}
        </h1>
        <div className="flex flex-col items-start gap-6 md:w-1/2">
          {summary && (
            <p className="text-lg leading-relaxed text-muted">{summary}</p>
          )}
          <div className="flex items-center gap-6 text-lg">
            <Link href="/contact" className="underline underline-offset-4">
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              download="Giovanni_Aguirre_CV.pdf"
              className="underline underline-offset-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div data-test-id="experience">
        {sectionTitles.map((title) => (
          <Accordion
            key={title}
            label={titleCase(title)}
            defaultOpen={title.toLowerCase() === "experience"}
          >
            <SectionEntries entries={cv.sections[title]} />
          </Accordion>
        ))}
      </div>
    </section>
  );
}
