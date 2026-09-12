/**
 * Form submission metadata — enriches every Web3Forms submission with
 * visitor context (IP, device, time, page) so the notification email
 * carries actionable lead information.
 *
 * IP is prefetched in the background as soon as the visitor focuses a
 * form, so it never blocks the submit → redirect flow.
 */

let ipPromise: Promise<string> | null = null;

/** Kick off the IP lookup early (idempotent, cached as a promise). */
export function prefetchIp(): void {
  if (ipPromise === null) {
    ipPromise = (async () => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 4000);
        const res = await fetch("https://api.ipify.org?format=json", {
          signal: controller.signal,
        });
        clearTimeout(timer);
        const data = await res.json();
        return typeof data.ip === "string" ? data.ip : "Unknown";
      } catch {
        return "Unknown";
      }
    })();
  }
}

/** Wait for the prefetched IP, at most `maxWaitMs`, then give up. */
async function getIp(maxWaitMs = 500): Promise<string> {
  prefetchIp();
  const fallback = new Promise<string>((resolve) =>
    setTimeout(() => resolve("Unknown"), maxWaitMs)
  );
  return Promise.race([ipPromise!, fallback]);
}

/** Human-readable device summary from browser APIs. */
function getDevice(): string {
  const ua = navigator.userAgent;
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string; mobile?: boolean };
  };
  const platform =
    nav.userAgentData?.platform || (navigator as any).platform || "Unknown";
  const type = nav.userAgentData?.mobile ? "Mobile" : "Desktop / Tablet";
  const screen_ = `${window.screen.width}x${window.screen.height}`;
  const lang = navigator.language;
  return `${type} | ${platform} | Screen ${screen_} | Lang ${lang} | ${ua}`;
}

/** Local time with timezone of the visitor. */
function getLocalTime(): string {
  const now = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
  return `${now.toLocaleString("en-GB", { hour12: false })} (${tz})`;
}

/** Append lead-context fields to a FormData right before submission. */
export async function appendSubmissionMeta(fd: FormData): Promise<void> {
  fd.set("submission_page", window.location.href);
  fd.set("submission_page_title", document.title);
  fd.set("referrer", document.referrer || "Direct / None");
  fd.set("submission_time", getLocalTime());
  fd.set("client_device", getDevice());
  fd.set("client_ip", await getIp());
}

// Prefetch the IP as soon as the visitor interacts with any form —
// by the time they hit submit (typically 10s+ later) it is cached.
if (typeof document !== "undefined") {
  const start = () => prefetchIp();
  document.addEventListener("focusin", start, { once: true, capture: true });
  document.addEventListener("touchstart", start, { once: true, capture: true });
}
