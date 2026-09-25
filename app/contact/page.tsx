import React from "react";
import {
  ArrowUpRight,
  GitHub,
  Gitlab,
  Linkedin,
  MessageSquare,
} from "react-feather";

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gioaguirre664/",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/galletafromjell666",
    Icon: GitHub,
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/gio.aguirre",
    Icon: Gitlab,
  },
  {
    label: "Discord",
    href: "https://discord.gg/ZQhXCaNU",
    Icon: MessageSquare,
  },
];

function page() {
  return (
    <section>
      <h1 className="text-5xl tracking-tight md:text-7xl">
        Contact
      </h1>
      <a
        href="mailto:giovanni.aguirrez@hotmail.com"
        className="mt-12 inline-block text-2xl underline underline-offset-4 md:text-4xl"
      >
        giovanni.aguirrez@hotmail.com
      </a>

      <h2 className="label mt-16 mb-4">Social</h2>
      <div className="border-t border-black/15 dark:border-white/15">
        {social.map(({ label, href, Icon }) => (
          <a
            key={href}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="group flex items-center justify-between border-b border-black/15 py-4 transition-colors hover:text-neutral-500 dark:border-white/15"
          >
            <span className="flex items-center gap-3 text-xl">
              <Icon size={18} />
              {label}
            </span>
            <ArrowUpRight
              size={18}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default page;
