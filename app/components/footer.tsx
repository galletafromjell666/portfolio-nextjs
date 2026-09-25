import Link from "next/link";
import { ArrowUpRight } from "react-feather";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "GitHub", href: "https://github.com/galletafromjell666" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gioaguirre664/" },
  { label: "GitLab", href: "https://gitlab.com/gio.aguirre" },
  { label: "Discord", href: "https://discord.gg/ZQhXCaNU" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-black/15 pt-8 pb-16 dark:border-white/15">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="flex flex-row gap-20">
          <div>
            <h2 className="label">Sitemap</h2>
            <ul className="mt-4 space-y-2">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-neutral-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label">Social</h2>
            <ul className="mt-4 space-y-2">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-neutral-500"
                  >
                    {item.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-sm">
          <h2 className="label">Have a project in mind?</h2>
          <a
            href="mailto:giovanni.aguirrez@hotmail.com"
            className="mt-4 inline-block text-2xl underline underline-offset-4"
          >
            giovanni.aguirrez@hotmail.com
          </a>
        </div>
      </div>
      <div className="label mt-12 flex flex-col gap-2 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Giovanni Aguirre</p>
        <p>MIT Licensed · Crafted with ❤️ in 🇸🇻</p>
      </div>
    </footer>
  );
}
