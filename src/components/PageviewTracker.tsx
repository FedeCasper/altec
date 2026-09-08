"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/trackClient";

export function PageviewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent(pathname, "pageview");
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement)?.closest?.('a[href^="https://wa.me/"]');
      if (link) {
        trackEvent(window.location.pathname, "whatsapp_click");
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
