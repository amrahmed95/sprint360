import { disposableDomains } from "./disposableDomains";

// Convert array to Set for O(1) lookup
const disposableDomainSet = new Set(disposableDomains);

// Pattern list for major personal/free email providers (captures TLD variants)
const PERSONAL_PROVIDER_PATTERNS: RegExp[] = [
  /^(.+\.)?gmail\.[a-z]{2,}$/,
  /^(.+\.)?googlemail\.[a-z]{2,}$/,
  /^(.+\.)?yahoo\.[a-z]{2,}$/,
  /^(.+\.)?outlook\.[a-z]{2,}$/,
  /^(.+\.)?hotmail\.[a-z]{2,}$/,
  /^(.+\.)?aol\.[a-z]{2,}$/,
  /^(.+\.)?icloud\.[a-z]{2,}$/,
  /^(.+\.)?protonmail\.[a-z]{2,}$/,
  /^(.+\.)?zoho\.[a-z]{2,}$/,
  /^(.+\.)?yandex\.[a-z]{2,}$/,
];

// Helper: check disposable by exact match or suffix (handles subdomains)
function isDisposableDomain(domain: string) {
  if (disposableDomainSet.has(domain)) return true;

  // iterate the original array (avoids for..of on Set when target < ES2015)
  for (let i = 0; i < disposableDomains.length; i++) {
    const d = disposableDomains[i];
    if (domain === d) return true;
    if (domain.endsWith("." + d)) return true;
  }
  return false;
}

/**
 * Validates email for the lead form:
 * - Blocks disposable / temporary domains
 * - Allows major personal providers (including TLD variants)
 * - Allows corporate / company domains (anything else not flagged disposable)
 *
 * Returns an object so callers can show helpful messages.
 */
export function isValidBusinessEmail(email: string): { ok: boolean; reason?: string } {
  if (!email) return { ok: false, reason: "Email is required." };

  const normalized = email.trim().toLowerCase();

  // Basic email format check
  const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicRegex.test(normalized)) return { ok: false, reason: "Invalid email format." };

  const domain = normalized.split("@")[1];
  if (!domain) return { ok: false, reason: "Invalid email domain." };

  // Block disposable / temporary domains (exact or as a suffix)
  if (isDisposableDomain(domain)) {
    return { ok: false, reason: "Disposable or temporary email addresses are not allowed." };
  }

  // Allow major personal email providers (Gmail, Yahoo, etc.), including country variants
  for (const p of PERSONAL_PROVIDER_PATTERNS) {
    if (p.test(domain)) {
      return { ok: true };
    }
  }

  // Otherwise allow corporate domains by default (not in disposable list)
  return { ok: true };
}

/*
Optional server-side MX check (call from server action if desired):

import dns from "dns/promises";
export async function hasMxRecord(domain: string): Promise<boolean> {
  try {
    const mx = await dns.resolveMx(domain);
    return Array.isArray(mx) && mx.length > 0;
  } catch {
    return false;
  }
}
*/
