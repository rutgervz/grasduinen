"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "The Racks" },
  { href: "/about/", label: "About" },
];

export default function AppNav() {
  const pathname = usePathname();
  return (
    <nav className="tabs">
      {TABS.map((tab) => {
        const active =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href.replace(/\/$/, ""));
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={active ? "tab active" : "tab"}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
