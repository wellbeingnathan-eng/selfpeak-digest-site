export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export const SITE_TITLE = 'SelfPeak Digest';
export const SITE_TAGLINE = 'Health insights - clean, calm, and actually useful.';
export const SITE_DESCRIPTION =
  'Short reads on health, behavior, and recovery - backed by research, written in plain English. No hype. No panic.';
export const SITE_URL = 'https://vitalbrief.com';
export const SUBSCRIBE_ENDPOINT = '/api/subscribe';
export const CONTACT_EMAIL = 'hello@yourdomain.com';
