/**
 * Cookie consent, as described in the Cookie Policy section of /privacy-policy.
 * Essential cookies are always on; analytics only after the visitor clicks
 * Accept. The choice is remembered for 12 months, then the banner asks again.
 *
 * The site does not load any analytics today. Anything that does later must
 * check hasAnalyticsConsent() before it starts.
 */

const STORAGE_KEY = "manuvoo-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "manuvoo:open-cookie-settings";
const CONSENT_LIFETIME_MS = 365 * 24 * 60 * 60 * 1000;

interface CookieChoice {
  analytics: boolean;
  /** When the choice was made (ms since epoch). */
  savedAt: number;
}

/** The visitor's choice, or null if none was made or it is over 12 months old. */
export function readCookieChoice(): CookieChoice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const choice = JSON.parse(raw) as CookieChoice;
    if (Date.now() - choice.savedAt > CONSENT_LIFETIME_MS) return null;
    return choice;
  } catch {
    return null;
  }
}

export function saveCookieChoice(analytics: boolean) {
  try {
    const choice: CookieChoice = { analytics, savedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // Storage blocked: the banner will simply ask again next visit.
  }
}

export function hasAnalyticsConsent(): boolean {
  return readCookieChoice()?.analytics === true;
}

/** Reopens the banner. Used by the "Cookie Settings" link in the footer. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
