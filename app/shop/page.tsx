"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// The racks moved to the home screen; keep the old /shop URL working.
export default function ShopRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return (
    <div className="wrap page-head">
      <p>
        The racks moved to the home screen. <Link href="/">Go there →</Link>
      </p>
    </div>
  );
}
