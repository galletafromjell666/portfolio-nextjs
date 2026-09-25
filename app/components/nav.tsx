"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "home" },
  "/blog": { name: "blog" },
  "/projects": { name: "projects" },
  "/contact": { name: "contact" },
};

function getIsNavItemActive(currentPath: string, path: string) {
  const root = path.split("/").at(1);
  const cleanCurrent = currentPath.split("/").at(1);
  return root === cleanCurrent;
}

export function Navbar() {
  const pathname = usePathname();

  const links = Object.entries(navItems).map(([path, { name }]) => {
    const isCurrentItemActive = getIsNavItemActive(pathname, path);
    const pathClass = isCurrentItemActive
      ? "text-primary active"
      : "text-muted hover:text-primary";
    return (
      <Link
        key={path}
        href={path}
        className={`relative text-xs uppercase tracking-widest transition-colors ${pathClass}`}
      >
        {name}
      </Link>
    );
  });

  return (
    <header className="mb-16">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-tight">
          Giovanni A.
        </Link>
        <nav
          id="nav"
          className="relative hidden items-center gap-8 md:flex"
        >
          {links}
        </nav>
      </div>
      <nav
        id="nav-mobile"
        className="relative mt-6 flex items-center gap-6 md:hidden"
      >
        {links}
      </nav>
    </header>
  );
}
