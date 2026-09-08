export type TrackEventType = "pageview" | "whatsapp_click";

export function trackEvent(path: string, type: TrackEventType = "pageview") {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path, type }),
    keepalive: true,
  }).catch(() => {});
}
