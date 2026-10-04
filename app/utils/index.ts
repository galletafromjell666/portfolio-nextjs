import fs from "fs";
import path from "path";
import { parse } from "yaml";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  stack?: string;
};

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function getProjectsPosts() {
  return getMDXData(path.join(process.cwd(), "app", "projects", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

/**
 * Resume data, read from the root `cv.yaml` (the RenderCV input and the single
 * source of truth). Only `cv` is consumed here; `design`/`settings` are for the
 * PDF build. Fields are optional because RenderCV allows omitting any of them.
 */
export type CVEntry = {
  // experience / education / normal entries
  company?: string;
  position?: string;
  institution?: string;
  area?: string;
  name?: string;
  // one-line entries
  label?: string;
  details?: string;
  // bullet entries
  bullet?: string;
  // shared
  date?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
};

export type CVData = {
  name?: string;
  headline?: string;
  location?: string;
  email?: string;
  website?: string;
  social_networks?: { network: string; username?: string; url?: string }[];
  sections: Record<string, (CVEntry | string)[]>;
};

export function getCV(): CVData {
  const raw = fs.readFileSync(path.join(process.cwd(), "cv.yaml"), "utf-8");
  return (parse(raw) as { cv: CVData }).cv;
}

/** Markdown used in RenderCV fields, reduced to plain text for the site. */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** `2024-03` -> `Mar 2024`; `present` -> `Present`; anything else passes through. */
function formatCVMonth(value: unknown): string | null {
  if (value == null || value === "") return null;
  const text = String(value).trim();
  if (/^present$/i.test(text)) return "Present";
  const match = /^(\d{4})(?:-(\d{2}))?$/.exec(text);
  if (!match) return text;
  const month = match[2] ? MONTHS[Number(match[2]) - 1] : null;
  return month ? `${month} ${match[1]}` : match[1];
}

/** The `date` override wins; otherwise join start/end into a range. */
export function formatCVPeriod(entry: CVEntry): string | null {
  if (entry.date) return stripMarkdown(entry.date);
  const start = formatCVMonth(entry.start_date);
  const end = formatCVMonth(entry.end_date);
  if (start && end) return `${start} – ${end}`;
  return start || end;
}

/** `online courses` -> `Online Courses` for accordion headings. */
export function titleCase(text: string): string {
  return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}
