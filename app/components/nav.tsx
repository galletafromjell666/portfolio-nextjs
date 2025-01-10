"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isatty } from "tty";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
  "/contact": {
    name: "contact",
  },
};

function getIsNavItemActive(currentPath: string, path: string) {
  const root = path.split("/").at(1);
  const cleanCurrent = currentPath.split("/").at(1);
  return root === cleanCurrent;
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isCurrentItemActive = getIsNavItemActive(pathname, path);
              const pathClass = isCurrentItemActive
                ? "text-primary active"
                : "text-muted";
              return (
                <Link
                  key={path}
                  href={path}
                  className={`${pathClass} transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
