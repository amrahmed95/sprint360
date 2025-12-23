// Simple in-memory rate limiter.
// exports a token bucket rate limiter (allows 5 requests per IP per hour).

type Bucket = {
  tokens: number;
  lastRefill: number;
};

const BUCKETS = new Map<string, Bucket>();

// Config: allow 5 submissions per hour per IP
const MAX_TOKENS = 5;
const REFILL_INTERVAL_MS = 60 * 60 * 1000; // 1 hour

function refill(bucket: Bucket) {
  const now = Date.now();
  // refill fully every REFILL_INTERVAL_MS (simple approach)
  if (now - bucket.lastRefill >= REFILL_INTERVAL_MS) {
    bucket.tokens = MAX_TOKENS;
    bucket.lastRefill = now;
  }
}

export const rateLimiter = {
  tryRemoveTokens(key: string, tokensToRemove = 1) {
    let bucket = BUCKETS.get(key);
    if (!bucket) {
      bucket = { tokens: MAX_TOKENS, lastRefill: Date.now() };
      BUCKETS.set(key, bucket);
    }

    refill(bucket);

    if (bucket.tokens >= tokensToRemove) {
      bucket.tokens -= tokensToRemove;
      return true;
    }
    return false;
  },

  // helper to inspect (for debugging)
  getTokens(key: string) {
    const b = BUCKETS.get(key);
    if (!b) return 0;
    refill(b);
    return b.tokens;
  },
};
