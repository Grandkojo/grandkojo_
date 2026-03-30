"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    const key = `visit-tracked-${new Date().toISOString().slice(0, 10)}`;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(key)) return;

    fetch("/api/analytics/visit", { method: "POST" })
      .then(() => sessionStorage.setItem(key, "1"))
      .catch(() => {
        // Ignore analytics errors; they should not affect UI.
      });
  }, []);

  return null;
}
