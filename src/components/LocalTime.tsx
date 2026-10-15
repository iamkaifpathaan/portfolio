"use client";

import { useSyncExternalStore } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

function subscribe(cb: () => void) {
  const id = window.setInterval(cb, 15_000);
  return () => window.clearInterval(id);
}

/** Current time in India, ticking every 15 s. Renders --:-- on the server. */
export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => fmt.format(new Date()),
    () => "--:--",
  );
  return <span suppressHydrationWarning>{time}</span>;
}
